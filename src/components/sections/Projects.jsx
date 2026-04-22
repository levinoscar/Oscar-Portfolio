import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Speechify Web HP Functional",
            description:
                "Implemented a hover-to-play reading experience with DOM parsing, boundary-aware text highlighting, and browser speech playback, backed by unit and integration tests.",
            tech: ["React", "TypeScript", "Playwright", "Vitest", "Web Speech API", "DOM APIs"],
            url: "https://github.com/levinoscar/web-hp-functional",
        },
        {
            title: "Speechify iOS Debugging Test",
            description:
                "Debugged and stabilized a SwiftUI challenge app by resolving UI and flow defects, improving concurrency behavior, and validating behavior through targeted iOS test scenarios.",
            tech: ["Swift", "SwiftUI", "Combine", "Swift Concurrency", "XCTest", "iOS Debugging"],
            url: "https://github.com/levinoscar/iOS-Debugging-Test",
        },
        {
            title: "Speechify LLM Web Refactoring",
            description:
                "Refactored a full-stack social platform monorepo with strict TypeScript and test coverage improvements across user and admin apps, plus API service hardening and performance tuning.",
            tech: [
                "TypeScript",
                "React 19",
                "TanStack Start",
                "gRPC",
                "Protocol Buffers",
                "Drizzle ORM",
                "SQLite",
                "Turborepo",
                "pnpm",
                "Playwright",
            ],
            url: "https://github.com/levinoscar/llm-web-refactoring-test",
        },
        {
            title: "Phillies ABS (Automated Ball Strike) Oracle AI",
            description:
                "Built an interactive baseball analytics dashboard that turns ABS challenge data into strategy insights, including strike-zone miss patterns, team success rates, and player challenge leaderboards.",
            tech: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Data Analytics"],
            url: "https://github.com/levinoscar/phillies-abs-oracle-ai",
        },
        {
            title: "Leland Data Science Bootcamp",
            description:
                "Built a data visualization platform using machine learning, predictive analytics, and interactive reports.",
            tech: ["Python", "TensorFlow", "Hugging Face", "Oracle SQL"],
            url: "https://github.com/levinoscar/Leland-Data-Science-Bootcamp",
        },
        {
            title: "Generative AI Therapy ChatBot",
            description:
                "Built a full-stack AI therapy chatbot with Hugging Face Transformers in Google Colab and created a pretrained LLM chatbot model fine-tuned in Ollama (Llama 3.1).",
            tech: [
                "React",
                "Node",
                "JavaScript",
                "TypeScript",
                "Python",
                "Google Colab",
                "TensorFlow",
                "LLM Fine-Tuning",
                "NLP",
                "Kubernetes",
                "Firebase",
                "Hugging Face",
            ],
            url: "https://github.com/capstone-projects-2024-fall/aldwairi-projects-skribble",
        },
        {
            title: "US City Guesser",
            description:
                "Designed a web-based geography game where users guess US cities from map cues, then receive distance feedback in both miles and kilometers.",
            tech: ["Software Design", "React", "JavaScript", "HTML/CSS", "SQL", "UI/UX Design"],
            url: "https://github.com/cis3296s24/US-City-Guesser",
        },
        {
            title: "Networked Spell Checker",
            description:
                "Built a networked spell-checking system to deepen practical experience in multithreaded programming, synchronization, and socket-based client-server communication.",
            tech: ["Socket Programming", "C", "Makefile"],
            url: "https://github.com/CIS-3207-F23/project-3-networked-spell-checker-levinoscar",
        },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        Featured GitHub Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.title}
                                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
                            >
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Projects;