import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/constants/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-6 bg-[#050b18]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-16 border-l-2 border-dashed border-blue-500/30 pl-6">
                    <SectionHeader
                        overline="My Projects"
                        title={
                            <>
                                Projects I've <span className="text-blue-400">Built</span>
                            </>
                        }
                        subtitle="Below are systems I've worked on, focusing on performance, scalability, and real-world impact."
                    />
                </div>

                {/* Stack */}
                <div className="space-y-12 md:space-y-16">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

            </div>
        </section>
    );
}