/**
 * CredentialsSection
 *
 * Social proof section showing:
 *  - Company/organization + role
 *  - Achievement badge
 *  - Display in a horizontal scrollable or wrapped layout
 */

import { CREDENTIALS } from "@/constants/credentials";

export default function CredentialsSection() {
    return (
        <section className="py-12 px-6 bg-[#050b18] border-b border-white/5">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">

                    {CREDENTIALS.map((cred, idx) => {
                        const Icon = cred.icon;

                        return (
                            <div
                                key={idx}
                                className="
                  flex items-center gap-3 px-4 py-2 rounded-lg
                  bg-white/5 border border-white/10
                  hover:border-blue-500/30 transition-colors
                "
                            >
                                {/* Icon */}
                                {Icon && (
                                    <Icon className="text-blue-400 text-lg" />
                                )}

                                {/* Text */}
                                <div className="flex flex-col">
                  <span className="text-slate-300 text-xs font-semibold tracking-wide">
                    {cred.company}
                  </span>
                                    <span className="text-slate-500 text-xs">
                    {cred.role}
                  </span>
                                </div>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}