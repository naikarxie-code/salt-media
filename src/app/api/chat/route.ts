import { NextResponse } from "next/server";
import { callNvidiaChatApi, ChatMessagePayload } from "@/lib/nvidia";
import { retrieveKnowledgeContext } from "@/lib/saltMediaRetrieval";
import { buildSystemPrompt, ALLOWED_SECTIONS } from "@/lib/aiPrompt";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          answer: "Please provide a valid query.",
          action: "none",
          section: null,
        },
        { status: 400 }
      );
    }

    const rawMessages: ChatMessagePayload[] = body.messages;

    // Filter and sanitize messages (keep latest 10 messages max)
    const recentMessages = rawMessages
      .filter((m) => m && typeof m.content === "string" && (m.role === "user" || m.role === "assistant"))
      .slice(-10);

    const latestUserMsg = [...recentMessages].reverse().find((m) => m.role === "user");
    const userQuery = latestUserMsg ? latestUserMsg.content.slice(0, 1000) : "";

    if (!userQuery) {
      return NextResponse.json(
        {
          answer: "Please ask a question about Salt Media.",
          action: "none",
          section: null,
        },
        { status: 400 }
      );
    }

    // 1. Retrieve lightweight matching context without RAG
    const knowledgeContext = retrieveKnowledgeContext(userQuery);

    // 2. Build system prompt
    const systemPrompt = buildSystemPrompt(knowledgeContext);

    // 3. Assemble message payload for NVIDIA API
    const nvidiaPayload: ChatMessagePayload[] = [
      { role: "system", content: systemPrompt },
      ...recentMessages.map((m) => ({
        role: m.role,
        content: m.content.slice(0, 1000), // Enforce length limit
      })),
    ];

    // 4. Call NVIDIA API
    const rawResponse = await callNvidiaChatApi(nvidiaPayload);

    // 5. Clean & parse structured JSON response
    let parsedData = parseStructuredResponse(rawResponse);

    return NextResponse.json(parsedData);
  } catch (error: unknown) {
    console.error("[/api/chat Route Error]:", error);
    return NextResponse.json(
      {
        answer: "Sorry, I couldn't process that right now. Please try again.",
        action: "none",
        section: null,
      },
      { status: 500 }
    );
  }
}

/**
 * Safely parses the model response into structured format.
 */
function parseStructuredResponse(raw: string): {
  answer: string;
  action: "navigate" | "none";
  section: string | null;
} {
  try {
    let cleanText = raw.trim();

    // Strip markdown code block wrappers if present (e.g. ```json ... ```)
    if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/^```[a-z]*\n?/i, "").replace(/\n?```$/, "").trim();
    }

    // Locate first '{' and last '}'
    const firstBrace = cleanText.indexOf("{");
    const lastBrace = cleanText.lastIndexOf("}");

    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      const jsonStr = cleanText.substring(firstBrace, lastBrace + 1);
      const json = JSON.parse(jsonStr);

      const answer = typeof json.answer === "string" ? json.answer : cleanText;
      let action: "navigate" | "none" = json.action === "navigate" ? "navigate" : "none";
      let section: string | null = typeof json.section === "string" ? json.section.toLowerCase().trim() : null;

      // Validate section against allowlist
      if (section && !ALLOWED_SECTIONS.includes(section as any)) {
        section = null;
        action = "none";
      }

      if (action === "navigate" && !section) {
        action = "none";
      }

      return { answer, action, section };
    }
  } catch (e) {
    console.warn("Failed to parse JSON from NVIDIA response. Falling back to plain text answer.", e);
  }

  // Fallback if parsing fails
  return {
    answer: raw.replace(/```[a-z]*/gi, "").replace(/```/g, "").trim(),
    action: "none",
    section: null,
  };
}
