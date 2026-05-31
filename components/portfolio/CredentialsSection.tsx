/**
 * CredentialsSection
 *
 * Social proof section showing:
 *  - Company/organization + role
 *  - Achievement badge
 *  - Display in a horizontal scrollable or wrapped layout
 */

interface Credential {
    company: string;
    role: string;
    badge?: string;
    icon?: string;
    color?: string;
}

const CREDENTIALS: Credential[] = [
    {
        company: "BITSLogic PVT Ltd",
        role: "Software Engineer",
        icon: "🔵",
    },
    {
        company: "FAST-NUCES",
        role: "Dean's List Fall 2023 & Spring 2023",
        badge: "📜",
    },
    {
        company: "FAST-NUCES",
        role: "Bronze Medalist (Fall 2023)",
        badge: "🥉",
    },
    {
        company: "FAST-NUCES",
        role: "BS Computer Science",
        badge: "🎓",
    },
];

export default function CredentialsSection() {
    return (
        <section className="py-12 px-6 bg-[#050b18] border-b border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                    {CREDENTIALS.map((cred, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                        >
                            <span className="text-lg">{cred.icon || cred.badge}</span>
                            <div className="flex flex-col">
                <span className="text-slate-300 text-xs font-semibold tracking-wide">
                  {cred.company}
                </span>
                                <span className="text-slate-500 text-xs">{cred.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
