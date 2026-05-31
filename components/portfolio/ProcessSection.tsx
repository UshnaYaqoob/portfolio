import SectionHeader from "./SectionHeader";
import { PRIMARY_STEPS, SECONDARY_STEPS } from "@/constants/process";

export default function ProcessSection() {
    return (
        <section className="py-24 px-6 bg-[#050b18]">
            <div className="max-w-6xl mx-auto">

                <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-8 md:p-12">

                    <SectionHeader
                        overline="My Process"
                        title={
                            <>
                                How I <span className="text-blue-400">Work</span>
                            </>
                        }
                        subtitle="Step-by-step development workflow I follow"
                        center
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {PRIMARY_STEPS.map((step) => (
                            <div key={step.title} className="text-center">
                                <step.icon className="text-blue-400 text-2xl mx-auto mb-3" />
                                <h3 className="text-white font-bold">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}