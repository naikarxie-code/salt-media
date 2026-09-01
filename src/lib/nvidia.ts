// ============================================================================
// SALT MEDIA — NVIDIA LLM API Client (Server-Side Only)
// Interacts with NVIDIA's OpenAI-compatible hosted API endpoints.
// ============================================================================

export interface ChatMessagePayload {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface NvidiaChatResponse {
  answer: string;
  action: "navigate" | "none";
  section: string | null;
}

const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = "meta/llama-3.2-11b-vision-instruct";

export async function callNvidiaChatApi(
  messages: ChatMessagePayload[]
): Promise<string> {
  const apiKey = process.env.NVIDIA_API_KEY;
  const model = process.env.NVIDIA_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY is not configured on the server.");
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

  try {
    const response = await fetch(NVIDIA_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey.trim()}`,
      },
      body: JSON.stringify({
        model: model.trim(),
        messages: messages,
        temperature: 0.2,
        max_tokens: 1024,
        top_p: 0.95,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      console.error(`[NVIDIA API Error] Status ${response.status}: ${errorText}`);
      throw new Error(`NVIDIA API returned HTTP ${response.status}`);
    }

    const data = await response.json();
    const messageContent = data.choices?.[0]?.message?.content;

    if (!messageContent) {
      throw new Error("NVIDIA API returned empty message content.");
    }

    return messageContent;
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    if (err instanceof Error && err.name === "AbortError") {
      throw new Error("NVIDIA API request timed out.");
    }
    throw err;
  }
}
