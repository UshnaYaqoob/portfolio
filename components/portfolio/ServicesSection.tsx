import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { SERVICES } from "@/constants/services";

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="py-24 px-6 bg-[#050b18] light:bg-white border-t border-white/5 light:border-slate-900/10"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-14 border-l-2 border-dashed border-blue-500/30 pl-6">
                    <SectionHeader
                        overline="Services"
                        title="What I Help You Build"
                        subtitle="I design and develop production-ready web applications from scalable frontends to secure backends with strong focus on performance, reliability, and real-world requirements."
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, i) => (
                        <Reveal key={service.title} delay={i * 90}>
                            <ServiceCard {...service} />
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <a
                        href="#contact"
                        className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full
              text-sm font-semibold text-white
              bg-blue-600 hover:bg-blue-500
              transition-all duration-200
              hover:shadow-lg hover:shadow-blue-600/30
            "
                    >
                        Get Started
                    </a>
                </div>

            </div>
        </section>
    );
}
