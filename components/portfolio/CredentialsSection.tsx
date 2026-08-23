import { CREDENTIALS } from "@/constants/credentials";
import Reveal from "./Reveal";

const TRACK = [...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS];

export default function CredentialsSection() {
    return (
        <section id="achievements" className="py-10 bg-[#0a1628] light:bg-slate-50 border-b border-white/5 light:border-slate-900/10 overflow-hidden marquee-fade">
            <Reveal>
                <div className="flex w-max animate-marquee">
                    {TRACK.map((cred, idx) => (
                        <div key={idx} className="flex items-center flex-shrink-0">

                            {/* Credential item */}
                            <div className="flex items-center gap-6 px-8 py-3">
                                {/* Logo */}
                                <img
                                    src={cred.image}
                                    alt={cred.title}
                                    className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                                />

                                {/* Text */}
                                <div className="flex flex-col whitespace-nowrap">
                                    <span className="text-white light:text-slate-900 text-sm font-bold leading-snug">
                                        {cred.title}
                                    </span>
                                    <span className="text-slate-400 light:text-slate-500 text-xs mt-0.5">
                                        {cred.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Vertical divider */}
                            <div className="w-px h-12 bg-white/10 light:bg-slate-900/10 flex-shrink-0" />

                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
