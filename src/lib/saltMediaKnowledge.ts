// ============================================================================
// SALT MEDIA — Server-Side Knowledge Base
// Source of truth: Approved website content & Canva Presentation
// ============================================================================

export interface SaltMediaKnowledge {
  company: {
    name: string;
    tagline: string;
    subtagline: string;
    positioning: string;
    secondaryPositioning: string;
    description: string;
    vision: string;
    mission: string;
    credentials: string[];
    endToEndStack: string[];
  };
  strategicFit: {
    coreIdeas: string[];
    afpSweetSpot: string[];
    positioningQuote: string;
  };
  platforms: {
    approvedList: string[];
    details: { name: string; category: string }[];
  };
  brands: {
    approvedList: string[];
    categories: string[];
  };
  philosophy: {
    audiencesReject: string[];
    saltMediaBuilds: string[];
    corePrinciple: string;
  };
  contentFormats: string[];
  selectedWork: {
    scriptedIPs: { title: string; category: string; format: string; description: string }[];
    additionalScriptedExperience: string[];
    microDramas: { title: string; category: string; platform: string }[];
  };
  factualDocumentary: {
    flagshipShows: { title: string; subline: string; description: string }[];
    documentaries: { title: string; subline: string; description: string }[];
    awards: { title: string; event: string; note: string }[];
  };
  brandedEntertainment: {
    categories: string[];
    examples: string[];
  };
  socialIntelligence: {
    headline: string;
    description: string;
    pillars: { num: string; title: string; description: string }[];
  };
  operatingModel: {
    fiveSteps: string[];
    fullProcess: string[];
  };
  collaborationModel: {
    advertiserInputs: string[];
    saltMediaOutputs: string[];
    sharedOutcome: string;
  };
  amazonAFP: {
    headline: string;
    subheadline: string;
    description: string;
    stakeholders: {
      brand: string;
      platform: string;
      audience: string;
      producer: string;
    };
    whySaltMedia: string[];
    safetyNote: string;
  };
  starterTerritories: {
    number: string;
    title: string;
    tagline: string;
    concept: string;
    audience: string;
    format: string;
    brandOpportunity: string;
    outputStack: string[];
  }[];
  outputStack: { level: string; desc: string }[];
  contact: {
    headline: string;
    subheadline: string;
    firstMovePackage: string[];
    emailGeneral: string;
    emailPartnerships: string;
    location: string;
    socials: string[];
  };
  unsupportedMetricsNotice: string;
}

export const SALT_MEDIA_KNOWLEDGE: SaltMediaKnowledge = {
  company: {
    name: "Salt Media",
    tagline: "CREATOR-LED PRODUCTION STUDIO",
    subtagline: "BRANDED CONTENT & ADVERTISER-FUNDED PROGRAMMING",
    positioning:
      "A creator-led production studio building IPs, formats and stories for brands across branded entertainment, advertiser-funded programming, documentaries, ad films and long-format web series.",
    secondaryPositioning:
      "Bridging the gap between advertising speed and entertainment depth.",
    description:
      "Salt Media is a creator-led production studio that combines the agility of advertising with the narrative depth of entertainment. We create branded content, original IPs, and platform-first programming that resonates with digital-native audiences across India.",
    vision:
      "To become India's leading creator-led studio for branded entertainment and platform-first content.",
    mission:
      "To bridge the gap between advertising speed and entertainment depth — creating content that brands want to fund, platforms want to air, and audiences want to watch.",
    credentials: [
      "11+ years of branded storytelling craft across fiction, factual, and ad films",
      "100+ brand collaborations across automotive, tech, FMCG, and government partners",
      "150+ crew scale-up capacity for seamless nationwide end-to-end production",
      "End-to-end execution: Concept → Writing → Production → Post → Delivery",
    ],
    endToEndStack: ["Concept", "Writing", "Production", "Post", "Delivery"],
  },

  strategicFit: {
    coreIdeas: [
      "Brands become part of the story rather than interrupting the narrative.",
      "Premium platform experience combined with digital-first instincts.",
      "Original IP development including characters, worlds, and repeatable episode engines.",
      "Quick turnaround without losing writing quality, production value, or brand safety.",
    ],
    afpSweetSpot: [
      "Entertainment first.",
      "Brand naturally woven in.",
      "Multi-format output.",
      "Scalable budgets.",
    ],
    positioningQuote:
      "Bridging the gap between advertising speed and entertainment depth.",
  },

  platforms: {
    approvedList: [
      "Amazon MX Player",
      "JioHotstar / Hotstar",
      "JioCinema / Viacom18",
      "Zee TV / Zee5",
      "History TV18",
      "Warner Bros. Discovery / Discovery",
      "TLC",
    ],
    details: [
      { name: "Amazon MX Player", category: "OTT / Free Streaming" },
      { name: "JioHotstar / Hotstar", category: "OTT Streaming" },
      { name: "JioCinema / Viacom18", category: "Broadcaster & OTT" },
      { name: "Zee TV / Zee5", category: "Broadcaster & OTT" },
      { name: "History TV18", category: "Linear & Factual" },
      { name: "Warner Bros. Discovery / Discovery", category: "Factual & Global" },
      { name: "TLC", category: "Lifestyle & Factual" },
    ],
  },

  brands: {
    approvedList: [
      "Maruti Suzuki",
      "Jeep",
      "Brezza",
      "Naukri.com",
      "Myntra",
      "Vivo",
      "OPPO",
      "Tecno",
      "Peter England",
      "NECC",
      "BlueStone",
      "UTI Mutual Fund",
      "LTIMindtree",
      "Kohler",
      "Odisha Government",
      "Uttar Pradesh Government",
      "Madhya Pradesh Government",
      "Oil India",
    ],
    categories: [
      "Automotive & Mobility",
      "Consumer / Digital Brands",
      "Corporate & Tech",
      "Institutional & Government",
    ],
  },

  philosophy: {
    audiencesReject: [
      "Forced product placement",
      "Brand speech disguised as dialogue",
      "Thin plots built around product features",
      "One-off content with no repeatable engine",
    ],
    saltMediaBuilds: [
      "Clear audience hooks",
      "Brand behaviour inside the plot",
      "Repeatable episode engines",
      "Characters and worlds with memory",
      "Assets designed for platform and social life",
    ],
    corePrinciple:
      "The brand should feel like a force inside the story, not a logo pasted on the wall.",
  },

  contentFormats: [
    "Advertiser-funded mini-series",
    "Docu-entertainment films",
    "Scripted web series",
    "Reality / challenge formats",
    "Celebrity-led IPs",
    "Creator-led digital shows",
    "Ad films",
    "Branded shorts",
    "Promos and teasers",
    "Reels and social cutdowns",
    "Behind-the-scenes content",
    "Pitch films and sizzles",
    "Long-format edits",
    "Cutdown banks",
    "Platform-native assets",
  ],

  selectedWork: {
    scriptedIPs: [
      {
        title: "FIRST COPY (S1 & S2)",
        category: "Scripted",
        format: "Web Series / Fiction",
        description:
          "Nostalgic 1990s thriller drama set in the pirated VHS era of Indian cinema.",
      },
      {
        title: "THE HOLIDAY",
        category: "Scripted",
        format: "Fiction Series",
        description:
          "High-energy bachelorette friendship adventure series filmed across scenic international locales.",
      },
      {
        title: "HAPPILY EVER AFTER",
        category: "Scripted",
        format: "Rom-Com Series",
        description:
          "Contemporary relationship comedy-drama exploring modern millennial wedding chaos.",
      },
      {
        title: "9 TO 5 TRENDING NOW",
        category: "Scripted",
        format: "Workplace Comedy",
        description:
          "Witty digital agency workplace comedy capturing social media culture and corporate life.",
      },
      {
        title: "AMMA",
        category: "Scripted",
        format: "Drama Series",
        description:
          "Emotional period narrative depicting resilience, legacy, and matriarchal power.",
      },
    ],
    additionalScriptedExperience: [
      "Fear Files (writing experience)",
      "Encounter (creative leadership)",
    ],
    microDramas: [
      { title: "Omi the GOAT", category: "Comedy", platform: "Vertical Mobile" },
      { title: "Hustle Queen Kajal", category: "Drama", platform: "Vertical Mobile" },
      { title: "Cringe King Pratya", category: "Satire", platform: "Vertical Mobile" },
      { title: "Notice Period", category: "Workplace", platform: "Vertical Mobile" },
      { title: "Narbhakshi", category: "Thriller", platform: "Vertical Mobile" },
      { title: "Dhokebaaz Judwaa", category: "Mystery", platform: "Vertical Mobile" },
      { title: "Rooh ki Pukaar", category: "Horror", platform: "Vertical Mobile" },
      { title: "CEO vs CEO", category: "Corporate", platform: "Vertical Mobile" },
    ],
  },

  factualDocumentary: {
    flagshipShows: [
      {
        title: "OMG! Yeh Mera India",
        subline: "Television & Factual",
        description:
          "Long-running flagship infotainment franchise celebrating India's most extraordinary talent and stories.",
      },
      {
        title: "The Great Indian Universities",
        subline: "Television & Factual",
        description:
          "In-depth docu-series exploring prestigious educational institutions and academic legacies across India.",
      },
      {
        title: "Heritage Trails (S1 & S2)",
        subline: "Cultural Travelogue",
        description:
          "Cinematic exploration of India's ancient architectural, spiritual, and historical heritage.",
      },
      {
        title: "Kashi Vishwanath Corridor",
        subline: "Special Documentary",
        description:
          "Monumental documentary capturing the transformation and cultural soul of Varanasi.",
      },
    ],
    documentaries: [
      {
        title: "Listen to the Sea",
        subline: "Impact & Festival Doc",
        description:
          "Award-winning documentary examining coastal ecosystems, maritime lives, and human resilience.",
      },
      {
        title: "Inside the Burning",
        subline: "Environmental Doc",
        description:
          "Raw, frontline documentary probing extreme environmental conditions and human survival.",
      },
      {
        title: "The Soul That Survived",
        subline: "Human Interest Doc",
        description:
          "Intimate biographical portrait of courage, survival, and triumph over adversity.",
      },
      {
        title: "Avaada Super Factory film",
        subline: "Institutional Film",
        description:
          "Industrial docu-film showcasing green energy transition and large-scale manufacturing excellence.",
      },
      {
        title: "KIIT Documentary",
        subline: "Institutional Film",
        description:
          "Empowering documentary highlighting educational transformation and social empowerment.",
      },
      {
        title: "Government Tourism & Culture Films",
        subline: "State & Cultural Films",
        description:
          "High-impact factual films produced for Odisha, Uttar Pradesh, and Madhya Pradesh governments.",
      },
    ],
    awards: [
      {
        title: "Best Documentary Short",
        event: "International Film Festival Selection",
        note: "Recognized for excellence in non-fiction storytelling & direction",
      },
      {
        title: "Best Short Director",
        event: "Festival Recognition",
        note: "Honored for narrative craft and visual direction",
      },
      {
        title: "Impact DOCS Award of Excellence",
        event: "Global Documentary Awards",
        note: "Awarded for high-impact social and environmental documentary craft",
      },
      {
        title: "International Festival Selections",
        event: "Global Screenings",
        note: "Officially selected across prestigious global documentary showcases",
      },
    ],
  },

  brandedEntertainment: {
    categories: [
      "Automotive and mobility",
      "Consumer / digital brands",
      "Corporate / institutions",
    ],
    examples: [
      "Maruti Suzuki Brezza integration",
      "Jeep adventurous storytelling",
      "Naukri.com workplace narrative",
      "Myntra fashion integration",
      "Vivo & OPPO technology showcases",
      "Peter England & BlueStone lifestyle branding",
      "UTI Mutual Fund financial literacy narrative",
    ],
  },

  socialIntelligence: {
    headline:
      "WE DON'T JUST PRODUCE CONTENT. WE UNDERSTAND WHAT MAKES PEOPLE STOP.",
    description:
      "Born from digital-native roots, Salt Media combines production craft with real-time social intelligence to engineer content that commands attention in crowded feeds.",
    pillars: [
      {
        num: "01",
        title: "TREND SPOTTING",
        description:
          "Emerging formats, cultural moments, and audience moods identified before saturation.",
      },
      {
        num: "02",
        title: "HOOK DESIGN",
        description:
          "Titles, premises, and opening episode hooks specifically designed for audience retention.",
      },
      {
        num: "03",
        title: "PLATFORM-NATIVE PACKAGING",
        description:
          "Hero assets, cutdowns, reels, promos, and shareable moments engineered for native algorithms.",
      },
      {
        num: "04",
        title: "MAXIMUM VIEWS MINDSET",
        description:
          "Brand-safe stories built to travel further organically across digital and social ecosystems.",
      },
    ],
  },

  operatingModel: {
    fiveSteps: [
      "Brand truth",
      "Format lock",
      "Script sprint",
      "Production pod",
      "Post factory",
    ],
    fullProcess: [
      "Receive brief",
      "Ideate concepts",
      "Plan & prep",
      "Execute",
      "Deliver",
    ],
  },

  collaborationModel: {
    advertiserInputs: [
      "brand category",
      "campaign objective",
      "audience priority",
      "language markets",
      "platform placement",
      "delivery window",
      "mandatories",
      "guardrails",
      "success metrics",
    ],
    saltMediaOutputs: [
      "format territories",
      "story hooks",
      "episode architecture",
      "characters",
      "budget-smart production plan",
      "hero film",
      "social extensions",
      "pilot-ready treatment",
      "scripts",
    ],
    sharedOutcome:
      "A platform-ready AFP format with creative strength, brand safety and production roadmap.",
  },

  amazonAFP: {
    headline: "ADVERTISER FUNDED PROGRAMMING (AFP)",
    subheadline: "The Amazon MX Player AFP Ecosystem",
    description:
      "Amazon MX Player's AFP model allows brands to fund original programming, creating a win-win-win ecosystem for brands, platforms, and audiences. Salt Media operates as an agile, entertainment-grade production partner in this model.",
    stakeholders: {
      brand:
        "Funds content + receives deep narrative integration without ad-blocker dropoff.",
      platform:
        "Receives premium original content through brand-funded programming and can monetize brand partnerships.",
      audience:
        "Receives free, high-quality entertainment without traditional interruptive advertising.",
      producer:
        "Receives production funding, creative opportunity, and platform distribution.",
    },
    whySaltMedia: [
      "Creator-Led Agility: Fresh, digital-native storytelling combined with high-grade broadcast production.",
      "Entertainment-Grade Production: 150+ crew scale-up capacity ensuring cinematic visuals.",
      "Brand Co-Development: Brands involved from script phase so integration feels natural.",
      "Platform-Native Thinking: Pacing, hooks, and narrative structures built for digital OTT viewing.",
      "One Idea → Many Outputs: Unlocking max ROI by deriving promos, reels, BTS, and cutdowns from one hero shoot.",
    ],
    safetyNote:
      "Salt Media operates as a production studio executing content for platforms including Amazon MX Player. We do not claim official endorsement or exclusive partnership status beyond approved content execution.",
  },

  starterTerritories: [
    {
      number: "01",
      title: "MOBILITY + FESTIVE INDIA",
      tagline: "Youth & Family Road-Trip / Lifestyle Drama",
      concept:
        "Youth and family mini-series built around mobility, personal aspiration, and festive celebrations across India.",
      audience: "Gen-Z & Millennial families in Tier 1 & Tier 2 cities",
      format: "5-6 Episode Mini-Series (15-20 min / ep)",
      brandOpportunity:
        "Natural integration for Automotive, Tech, and E-commerce brands during peak festive buying cycles.",
      outputStack: [
        "Hero Series",
        "Travel Promos",
        "Behind-the-Scenes Vlogs",
        "Reel Cutdowns",
      ],
    },
    {
      number: "02",
      title: "CAREER / PRODUCTIVITY / FINTECH",
      tagline: "Workplace Comedy-Drama Format",
      concept:
        "Relatable workplace comedy-drama exploring career hustles, ambition, corporate quirks, and financial milestones.",
      audience: "Young working professionals (21-35 years)",
      format: "6-8 Episode Comedy-Drama Series",
      brandOpportunity:
        "In-built usage of fintech apps, productivity tools, modern apparel, and career platforms.",
      outputStack: [
        "Hero Show",
        "Relatable Meme Reels",
        "LinkedIn Creator Hooks",
        "Brand Cutdowns",
      ],
    },
    {
      number: "03",
      title: "CHANGEMAKERS JOURNEY",
      tagline: "Inspiring Docu-Entertainment Series",
      concept:
        "Docu-entertainment journey profiling extraordinary entrepreneurs, innovators, and grassroot changemakers transforming India.",
      audience: "Aspirational youth, business leaders & conscious consumers",
      format: "Docu-Series / Feature Specials",
      brandOpportunity:
        "High-credibility brand association with innovation, sustainability, and national progress.",
      outputStack: [
        "Docu-Episodes",
        "Spotlight Shorts",
        "Thought Leadership Clips",
        "Festival Cuts",
      ],
    },
    {
      number: "04",
      title: "VERTICAL-FIRST BRAND UNIVERSE",
      tagline: "Micro-Drama / Short-Form IP World",
      concept:
        "Snackable micro-drama universe for mobile-first audiences seeking high-frequency story hits.",
      audience: "Mobile-first Gen Z & digital natives",
      format: "15-30 Vertical Short Episodes (60-90 sec / ep)",
      brandOpportunity:
        "High-frequency brand recall and viral social sharing across reels & short-form platforms.",
      outputStack: [
        "Vertical Episodes",
        "Trending Audio Hooks",
        "Viral Clips",
        "User-Generated Challenges",
      ],
    },
  ],

  outputStack: [
    {
      level: "HERO SHOW",
      desc: "Advertiser-funded mini-series, docu-entertainment, or web series",
    },
    {
      level: "PROMOS & TEASERS",
      desc: "Cinematic high-energy trailer cuts for platform marketing",
    },
    {
      level: "REELS & SHORTS",
      desc: "Vertical-first snackable scene hooks for Instagram & YouTube",
    },
    {
      level: "INFLUENCER HOOKS",
      desc: "Creator-led reaction, review, and integration assets",
    },
    {
      level: "BRAND-SAFE CUTDOWNS",
      desc: "Bespoke 30s / 15s brand-focused cuts for performance ads",
    },
    {
      level: "SOCIAL EXTENSIONS",
      desc: "BTS, meme formats, sound bites, and community engagement posts",
    },
  ],

  contact: {
    headline: "LET'S BUILD WHAT'S NEXT.",
    subheadline:
      "Ready to create content that brands want to fund, platforms want to air, and audiences want to watch?",
    firstMovePackage: [
      "3 AFP CONCEPTS",
      "1 PILOT-READY TREATMENT",
      "1 PRODUCTION ROADMAP",
    ],
    emailGeneral: "hello@saltmedia.in",
    emailPartnerships: "partnerships@saltmedia.in",
    location: "Mumbai, India",
    socials: ["Instagram", "LinkedIn", "YouTube"],
  },

  unsupportedMetricsNotice:
    "Notice: Claims such as 92% retention, ₹1,200 Cr revenue, 350M+ views, 45%, 70%, 150M+, 3x, 65%, 40%, 85%, 2.5x are not verified in official Salt Media presentation materials. If asked about unverified statistics, state: 'I don't have a verified figure for that in the Salt Media materials.'",
};
