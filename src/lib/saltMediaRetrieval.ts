// ============================================================================
// SALT MEDIA — Deterministic Knowledge Retrieval (NO RAG)
// Selects relevant knowledge sections using keyword and intent matching.
// ============================================================================

import { SALT_MEDIA_KNOWLEDGE, SaltMediaKnowledge } from "./saltMediaKnowledge";

export function retrieveKnowledgeContext(userQuery: string): string {
  const query = userQuery.toLowerCase().trim();

  const selectedSections: Set<keyof SaltMediaKnowledge> = new Set();

  // Topic Matching Rules

  // 1. Company / About / Positioning
  if (
    query.includes("who is") ||
    query.includes("what is salt") ||
    query.includes("what does salt") ||
    query.includes("about") ||
    query.includes("experience") ||
    query.includes("years") ||
    query.includes("craft") ||
    query.includes("studio") ||
    query.includes("who are you") ||
    query.includes("positioning") ||
    query.includes("vision") ||
    query.includes("mission")
  ) {
    selectedSections.add("company");
    selectedSections.add("strategicFit");
  }

  // 2. Documentaries / Factual
  if (
    query.includes("docu") ||
    query.includes("factual") ||
    query.includes("real story") ||
    query.includes("infotainment") ||
    query.includes("omg") ||
    query.includes("universities") ||
    query.includes("heritage") ||
    query.includes("kashi") ||
    query.includes("award") ||
    query.includes("festival")
  ) {
    selectedSections.add("factualDocumentary");
    selectedSections.add("selectedWork");
  }

  // 3. Amazon AFP / Advertiser-Funded Programming
  if (
    query.includes("afp") ||
    query.includes("advertiser funded") ||
    query.includes("amazon") ||
    query.includes("mx player") ||
    query.includes("funding") ||
    query.includes("stakeholder") ||
    query.includes("why salt")
  ) {
    selectedSections.add("amazonAFP");
    selectedSections.add("contentFormats");
    selectedSections.add("collaborationModel");
  }

  // 4. Platforms & Ecosystem Partners
  if (
    query.includes("platform") ||
    query.includes("hotstar") ||
    query.includes("discovery") ||
    query.includes("zee") ||
    query.includes("viacom") ||
    query.includes("jiocinema") ||
    query.includes("history tv") ||
    query.includes("where stream") ||
    query.includes("partner")
  ) {
    selectedSections.add("platforms");
    selectedSections.add("brands");
  }

  // 5. Brands & Branded Content / Automotive / Tech
  if (
    query.includes("brand") ||
    query.includes("maruti") ||
    query.includes("jeep") ||
    query.includes("auto") ||
    query.includes("tech") ||
    query.includes("naukri") ||
    query.includes("myntra") ||
    query.includes("vivo") ||
    query.includes("oppo") ||
    query.includes("clients") ||
    query.includes("worked with") ||
    query.includes("collaboration")
  ) {
    selectedSections.add("brands");
    selectedSections.add("brandedEntertainment");
    selectedSections.add("starterTerritories");
  }

  // 6. Content Formats / Scripted / Micro-Drama / IPs
  if (
    query.includes("format") ||
    query.includes("scripted") ||
    query.includes("series") ||
    query.includes("micro") ||
    query.includes("short") ||
    query.includes("reels") ||
    query.includes("first copy") ||
    query.includes("holiday") ||
    query.includes("workplace") ||
    query.includes("what can you make") ||
    query.includes("what do you produce") ||
    query.includes("types of content")
  ) {
    selectedSections.add("contentFormats");
    selectedSections.add("selectedWork");
  }

  // 7. Strategy / Operating Model / Social Intelligence / Co-development
  if (
    query.includes("strategy") ||
    query.includes("operating model") ||
    query.includes("co-development") ||
    query.includes("social intelligence") ||
    query.includes("trend") ||
    query.includes("hook") ||
    query.includes("process") ||
    query.includes("sprint") ||
    query.includes("pod")
  ) {
    selectedSections.add("operatingModel");
    selectedSections.add("socialIntelligence");
    selectedSections.add("collaborationModel");
    selectedSections.add("strategicFit");
  }

  // 8. Starter Territories / Pitch / Output Stack
  if (
    query.includes("starter") ||
    query.includes("territor") ||
    query.includes("build") ||
    query.includes("output stack") ||
    query.includes("first move") ||
    query.includes("mobility") ||
    query.includes("fintech") ||
    query.includes("changemaker")
  ) {
    selectedSections.add("starterTerritories");
    selectedSections.add("outputStack");
  }

  // 9. Contact / Pitch / Hire
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("start") ||
    query.includes("pitch") ||
    query.includes("talk") ||
    query.includes("location") ||
    query.includes("mumbai")
  ) {
    selectedSections.add("contact");
  }

  // Fallback: If no specific keywords matched or general query, include foundational overview
  if (selectedSections.size === 0) {
    selectedSections.add("company");
    selectedSections.add("contentFormats");
    selectedSections.add("platforms");
    selectedSections.add("brands");
    selectedSections.add("contact");
  }

  // Always append unsupported metrics notice for factual safety
  const formattedBlocks: string[] = [];

  selectedSections.forEach((key) => {
    const data = SALT_MEDIA_KNOWLEDGE[key];
    formattedBlocks.push(`=== KNOWLEDGE SECTION: ${key.toUpperCase()} ===\n${JSON.stringify(data, null, 2)}`);
  });

  formattedBlocks.push(
    `=== FACTUAL SAFETY RULE ===\n${SALT_MEDIA_KNOWLEDGE.unsupportedMetricsNotice}`
  );

  return formattedBlocks.join("\n\n");
}
