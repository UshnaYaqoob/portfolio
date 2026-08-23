import { BOT_TOPICS, type BotTopicId } from "@/constants/aiBot";

export function matchTopic(input: string): BotTopicId {
    const text = input.toLowerCase().trim();
    if (!text) return "fallback";

    let bestId: BotTopicId = "fallback";
    let bestScore = 0;

    for (const topic of Object.values(BOT_TOPICS)) {
        if (topic.keywords.length === 0) continue;
        let score = 0;
        for (const keyword of topic.keywords) {
            if (text.includes(keyword)) score += 1;
        }
        if (score > bestScore) {
            bestScore = score;
            bestId = topic.id;
        }
    }

    return bestScore > 0 ? bestId : "fallback";
}
