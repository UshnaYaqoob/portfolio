export type BotTopicId =
    | "greeting"
    | "hello"
    | "whyHire"
    | "skills"
    | "experience"
    | "projects"
    | "lawcurgus"
    | "greenounce"
    | "nexuspro"
    | "shoplink"
    | "education"
    | "availability"
    | "contact"
    | "fun"
    | "fallback";

export interface BotTopic {
    id: BotTopicId;
    keywords: string[];
    chipLabel: string;
    response: string;
    suggestions: BotTopicId[];
}

export const BOT_NAME = "Ushna's AI Assistant";

export const BOT_TOPICS: Record<BotTopicId, BotTopic> = {
    greeting: {
        id: "greeting",
        keywords: [],
        chipLabel: "",
        response:
            "Hi! I'm a lightweight AI trained on Ushna's portfolio. Ask me anything about her skills, projects, or why she'd be a great fit for your team.",
        suggestions: ["whyHire", "skills", "projects"],
    },
    hello: {
        id: "hello",
        keywords: ["hi", "hello", "hey", "yo", "sup"],
        chipLabel: "Say hi",
        response: "Hey there! What would you like to know about Ushna?",
        suggestions: ["whyHire", "skills", "projects"],
    },
    whyHire: {
        id: "whyHire",
        keywords: ["why", "hire", "choose", "pick", "worth", "best", "better"],
        chipLabel: "Why should I hire her?",
        response:
            "Great question! Ushna is a Full-Stack Developer with 2+ years of production experience, she's shipped systems used by law firms, schools, and global platforms.\n\nShe specializes in secure, real-time systems (RBAC, JWT, live Supabase subscriptions) and was recognized with a Team Appreciation Award from a CTO for her work on a global payment platform.\n\nIf you need someone who ships reliable, scalable code, not just prototypes, she's your developer.",
        suggestions: ["skills", "projects", "contact"],
    },
    skills: {
        id: "skills",
        keywords: ["skill", "tech", "stack", "technology", "language", "tool", "framework"],
        chipLabel: "What's her tech stack?",
        response:
            "Ushna works across the full stack:\n\n- Frontend: React, TypeScript, Next.js\n- Backend: .NET (F#), Django, Node.js/Express\n- Data: PostgreSQL, MySQL, Supabase, Power BI\n- Auth & Security: JWT, Role-Based Access Control, Row-Level Security\n\nShe picks the right tool for the job instead of forcing one stack everywhere.",
        suggestions: ["experience", "projects", "whyHire"],
    },
    experience: {
        id: "experience",
        keywords: ["experience", "work", "job", "career", "background", "bitlogix", "years"],
        chipLabel: "Tell me about her experience",
        response:
            "Ushna is currently an Associate Software Engineer at BITLogix, where she builds secure, scalable systems, from role-based platforms to real-time apps and analytics dashboards.\n\nIn 2+ years she's completed 4+ production projects spanning legal tech, education, fintech/payments, and retail analytics.",
        suggestions: ["projects", "education", "whyHire"],
    },
    projects: {
        id: "projects",
        keywords: ["project", "portfolio", "built", "app", "apps", "work she", "shipped"],
        chipLabel: "What has she built?",
        response:
            "Here's what she's built:\n\nLawCurgus, role-based legal management platform\nGreenounce, real-time school pickup queue with live notifications\nNexus-Pro, high-volume laboratory payment system (recognized by the CTO)\nShopLink, multi-branch retail platform with NLP + Power BI\n\nWant details on any of these?",
        suggestions: ["lawcurgus", "greenounce", "nexuspro", "shoplink"],
    },
    lawcurgus: {
        id: "lawcurgus",
        keywords: ["lawcurgus", "legal", "law firm", "law"],
        chipLabel: "LawCurgus",
        response:
            "LawCurgus, a structured, role-based system enabling law firms to manage operations efficiently.\n\n- Built secure role-based access and permission management\n- Developed frontend workflows for lawyer schedules, meetings, and case timelines\n- Collaborated with backend teams on API consistency and performance\n\nStack: React, TypeScript, Django, Python",
        suggestions: ["projects", "whyHire", "contact"],
    },
    greenounce: {
        id: "greenounce",
        keywords: ["greenounce", "school", "pickup", "queue"],
        chipLabel: "Greenounce",
        response:
            "Greenounce, a real-time school pickup queue system that smoothed operations and improved the parent experience.\n\n- Live notifications via Supabase subscriptions\n- Advanced filters and multi-language support\n- Secure authentication with JWT\n\nStack: React, TypeScript, Supabase",
        suggestions: ["projects", "whyHire", "contact"],
    },
    nexuspro: {
        id: "nexuspro",
        keywords: ["nexus", "payment", "laboratory", "lab"],
        chipLabel: "Nexus-Pro",
        response:
            "Nexus-Pro, a stable, scalable payment system for high-volume laboratory transactions, used globally.\n\n- Worked on a payment module used worldwide\n- Optimized APIs for faster processing\n- Improved backend reliability and performance\n\nStack: React, TypeScript, .NET (F# Core), recognized with a Team Appreciation Award from the CTO.",
        suggestions: ["projects", "whyHire", "contact"],
    },
    shoplink: {
        id: "shoplink",
        keywords: ["shoplink", "retail", "shop", "final year", "nlp"],
        chipLabel: "ShopLink",
        response:
            "ShopLink, Ushna's final year project, enabling shop owners to make data-driven decisions.\n\n- Built a centralized multi-branch system\n- Integrated NLP-based data extraction\n- Connected Power BI dashboards\n\nStack: React, Node.js, Express, MySQL, Power BI, NLP",
        suggestions: ["projects", "whyHire", "contact"],
    },
    education: {
        id: "education",
        keywords: ["education", "degree", "study", "university", "college", "award", "dean", "credential"],
        chipLabel: "Education & awards",
        response:
            "Ushna made the Dean's List in Fall 2023 & Spring 2023, and won a Bronze Medal in Fall 2023, alongside a Team Appreciation Award from Nexus Pro's CTO for her work on their payment system.",
        suggestions: ["experience", "whyHire", "contact"],
    },
    availability: {
        id: "availability",
        keywords: ["available", "availability", "freelance", "rate", "cost", "price", "budget", "start"],
        chipLabel: "Is she available?",
        response:
            "Ushna is open to new opportunities and freelance/contract work. The fastest way to start a conversation is the contact form on this page, she typically replies within a day.",
        suggestions: ["contact", "whyHire"],
    },
    contact: {
        id: "contact",
        keywords: ["contact", "email", "reach", "call", "message", "hire me", "get in touch"],
        chipLabel: "How do I contact her?",
        response:
            "You can reach Ushna through the Contact section on this page, just scroll down and send a message. She replies fast!",
        suggestions: ["whyHire"],
    },
    fun: {
        id: "fun",
        keywords: ["joke", "hobby", "fun", "who are you", "are you real", "bot"],
        chipLabel: "",
        response:
            "I'm a lightweight assistant trained on Ushna's portfolio, not a general AI. But I can tell you anything about her skills, projects, or why she'd be a great fit for your team!",
        suggestions: ["whyHire", "skills", "projects"],
    },
    fallback: {
        id: "fallback",
        keywords: [],
        chipLabel: "",
        response:
            "I'm not sure about that one, but I know a lot about Ushna's skills, experience, and projects! Try one of these:",
        suggestions: ["whyHire", "skills", "projects", "contact"],
    },
};
