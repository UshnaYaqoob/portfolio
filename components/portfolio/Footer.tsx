import { BRAND, QUICK_LINKS, SOCIAL_LINKS, BRAND_ICON } from "@/constants/footer";

export default function Footer() {
    const year = new Date().getFullYear();
    const BrandIcon = BRAND_ICON;

    return (
        <footer className="bg-[#030812] light:bg-slate-50 border-t border-white/5 light:border-slate-900/10 px-6 pt-14 pb-8">
            <div className="max-w-6xl mx-auto">

                {/* ── Three-column grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <BrandIcon size={16} className="text-white" />
              </span>
                            <span className="text-white light:text-slate-900 font-bold text-lg">
                {BRAND.name}
              </span>
                        </div>

                        <p className="text-slate-500 light:text-slate-600 text-sm leading-relaxed max-w-[220px]">
                            {BRAND.tagline}
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-600 light:text-slate-500 font-semibold mb-1">
              Navigate
            </span>

                        {QUICK_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-slate-500 light:text-slate-600 text-sm hover:text-slate-300 light:hover:text-slate-900 transition-colors duration-200 w-fit"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social links */}
                    <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-slate-600 light:text-slate-500 font-semibold mb-1">
              Connect
            </span>

                        {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="flex items-center gap-2 text-slate-500 light:text-slate-600 text-sm hover:text-slate-300 light:hover:text-slate-900 transition-colors duration-200 w-fit"
                            >
                                <Icon size={15} />
                                {label}
                            </a>
                        ))}
                    </div>

                </div>

                {/* ── Bottom bar ── */}
                <div className="border-t border-white/5 light:border-slate-900/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-600 light:text-slate-500 text-xs">
                        © {year} {BRAND.name}. All rights reserved.
                    </p>
                    <p className="text-slate-700 light:text-slate-400 text-xs">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>

            </div>
        </footer>
    );
}