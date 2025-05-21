import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
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
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Generative AI Therapy ChatBot</h3>
                            <p className="text-gray-400 mb-4">
                                Built a full-stack AI therapy chatbot with HuggingFace Transformers
                                in Google Colab to create a pretrained LLM chatbot model that was 
                                fine-tuned in Unslothed Ollama (Llama 3.1)
                                (Llama 3.1-8B)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    "React.js", "Node.js", "JavaScript", "TypeScript", "Python", "Google Colab (Jupyter Notebook)",
                                    "TensorFlow.js", "Large Language Model (LLM) Fine-Tuning", "Natural Language Processing (NLP)",
                                    "Kubernetes", "Firebase", "HuggingFace Transformers"
                                ].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/capstone-projects-2024-fall/aldwairi-projects-skribble"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    <div
                        className="
                            glass p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30
                            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                            transition-all"
                    >
                        <h3 className="text-xl font-bold mb-2">Leland Data Science Bootcamp</h3>
                        <p className="text-gray-400 mb-4">
                            ML-powered data visualization platform with predictive analytics
                            and interactive reports at Leland Data Science Bootcamp.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["SQL", "Python", "TensorFlow.js", "HuggingFace Transformers", "Oracle SQL"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="
                                        bg-blue-500/10 text-blue-500 py-1 px-3 
                                        rounded-full text-sm
                                        transition
                                        hover:bg-blue-500/20 hover:-translate-y-0.5
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/levinoscar/Leland-Data-Science-Bootcamp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div
                        className="
                            glass p-6 rounded-xl border border-white/10 
                            hover:-translate-y-1 hover:border-blue-500/30
                            hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                            transition-all"
                    >   
                        <h3 className="text-xl font-bold mb-2">US City Guesser</h3>
                        <p className="text-gray-400 mb-4">
                            Designed a web-based game using React.js, HTML and MongoDB,
                            where users guess the US city with the map with state lines on the website.
                            I have also calculated the distance after a guess attempt was made, 
                            along with a conversion in both miles and km (1.6 km is 1 mile) for non US citizens. 
                            Settings was also made to display dark/light vision of the map in CSS and 
                            dot filter to collect the amount of city attempts.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "JavaScript", "HTML", "CSS", "PostgreSQL", "UI/UX Design"].map(
                                (tech) => (
                                    <span
                                        key={tech}
                                        className="
                                            bg-blue-500/10 text-blue-500 py-1 px-3 
                                            rounded-full text-sm
                                            transition
                                            hover:bg-blue-500/20 hover:-translate-y-0.5
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/cis3296s24/US-City-Guesser"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
                                glass p-6 rounded-xl border border-white/10 
                                hover:-translate-y-1 hover:border-blue-500/30
                                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                                transition-all"
                        >
                            <h3 className="text-xl font-bold mb-2">Networked Spell Checker</h3>
                            <p className="text-gray-400 mb-4">
                                Gained additional exposure and practical experience in multi-threaded programming 
                                and the synchronization problems in it. This project helped me learned the most on
                                networks and socket programming for communication purposes (including client and server).
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Socket.IO", "C", "makefile"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="
                                            bg-blue-500/10 text-blue-500 py-1 px-3 
                                            rounded-full text-sm
                                            transition
                                            hover:bg-blue-500/20 hover:-translate-y-0.5
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center ">
                                <a
                                    href="https://github.com/CIS-3207-F23/project-3-networked-spell-checker-levinoscar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Projects;