import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React", 
        "Redux",
        "Vite",
        "Next",
        "Express",
        "JavaScript",
        "Typescript",
        "HTML/CSS",
        "TailwindCSS", 
        "Figma (UI/UX)", 
        "Tableau",
        "OOP/Software Design",
        "JSON", 
        "Swift",
        "Objective C"
    ];

    const backendSkills = [ 
        "Google Firebase",
        "Microsoft SQL Server",
        "Microsoft Azure",
        "Python", 
        "Java", 
        "Node",
        "REST APIs",
        "Kotlin",
        "Kubernetes",
        "Docker",
        "Machine Learning",
        "C",
        "C++",
        "C#",
        "Spring Boot",
        "Oracle SQL",
        "Basic understanding of AWS, KQL, SQL (with MySQL and NoSQL)"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">Oscar is a very passionate developer with an expertise in building scalable web applications, making new friends, loves to travel and his favorite sport is ice hockey.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech, key) => (
                                            <span
                                                key={key}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <h4>
                                        <strong> Temple University </strong> - Bachelors of Science
                                        in Computer Science <br/>(August 2019 - December 2024)
                                    </h4>
                                    <h4>
                                        <strong> Relevant Coursework: </strong>
                                    </h4>
                                    <li>Data Structures</li>
                                    <li>Data Structures and Algorithms</li>
                                    <li>UI/UX Design</li>
                                    <li>Intro to Operating Systems</li>
                                    <li>Mobile Dev (Android Studio)</li>
                                    <li>Machine Learning
                                        <ul className="list-disc list-inside ml-4">
                                            <li>Artificial Intelligence</li>
                                            <li>LLM</li>
                                            <li>Hugging-Face</li>
                                            <li>Deep Learning</li>
                                            <li>NLP</li>
                                            <li>Neural Networks</li>
                                        </ul>
                                    </li>
                                    <li>Intro to Cloud Computing</li>
                                    <li>Software Security (Docker)</li>
                                    <li>Software Design</li>
                                    <li> Capstone Project (Atlassian Jira)</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4>
                                            <strong> Software Developer at Tern </strong>
                                        </h4>
                                        <h4 className="font-medium">
                                            {" "}(June 2025 - January 2026){" "}
                                        </h4><br/>
                                        <li>
                                            Streamlined UI development by 30%, using Carbon Design system, Next.js, and TailwindCSS
                                        </li>
                                        <li>
                                            Reduced post-deployment issues and improved development speed by 25%
                                        </li>
                                        <li>
                                            Specialized in building high-performance and adaptive Firebase AI web applications
                                        </li>
                                        <li>
                                            Created Carbon Design components with innovated features in React and Next.js frameworks
                                        </li>
                                        <li>
                                            Operated in Git Bash to see the deployment live and update features in GitHub Pull Requests
                                        </li>
                                        <li>
                                            Managed each tasks in Jira to meet sprint goals, resolved tickets based on QA and COO’s feedbacks
                                        </li>
                                        <li>
                                            Improved system reliability by developing Jest (End-to-End) tests to validate back-end data flows
                                        </li>
                                        <li>
                                            Managed REST API integration by managing back-end API files, ensured consistent uptime and seamless data flow between services
                                        </li>
                                    </div>
                                <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
    );
}

export default About;