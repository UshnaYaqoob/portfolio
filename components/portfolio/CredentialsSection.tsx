import { CREDENTIALS } from "@/constants/credentials";

export default function CredentialsSection() {
    return (
        <section className="py-10 px-6 bg-[#0a1628] border-b border-white/5">            <div className="max-w-5xl mx-auto">

                <div className="flex flex-wrap items-center justify-center gap-0">
                    {CREDENTIALS.map((cred, idx) => (
                        <div key={idx} className="flex items-center">

                            {/* Credential item */}
                            <div className="flex items-center gap-3 px-8 py-3">
                                {/* Logo */}
                                <img
                                    src={cred.image}
                                    alt={cred.title}
                                    className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                                />

                                {/* Text */}
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-bold leading-snug">
                                        {cred.title}
                                    </span>
                                    <span className="text-slate-400 text-xs mt-0.5">
                                        {cred.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Vertical divider — skip after last item */}
                            {idx < CREDENTIALS.length - 1 && (
                                <div className="w-px h-30 bg-white/10 flex-shrink-0" />
                            )}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}