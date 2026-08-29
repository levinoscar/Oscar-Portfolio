import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React", 
        "Redux",
        "Vite",
        "Next",
        "TypeScript",
        "Express",
        "JavaScript",
        "HTML/CSS",
        "TailwindCSS", 
        "Figma (UI/UX)", 
        "Tableau",
        "OOP/Software Design",
        "JSON", 
        "Swift",
        "SwiftUI",
        "Objective C"
    ];

    const education = [
        {
            school: "Temple University",
            degree: "Bachelor of Science in Computer Science",
            dates: "August 2019 - December 2024",
            coursework: [
                "Data Structures",
                "Data Structures and Algorithms",
                "UI/UX Design",
                "Intro to Operating Systems",
                "Mobile Dev (Android Studio)",
                "Machine Learning — Artificial Intelligence, LLM, Hugging Face, Deep Learning, NLP, Neural Networks",
                "Intro to Cloud Computing",
                "Software Security (Docker)",
                "Software Design",
                "Capstone Project (Atlassian Jira)",
            ],
        },
    ];

    const workExperience = [
        {
            title: "Quality Assurance Specialist",
            company: "PNC · Full-time",
            dates: "July 2026 - Present",
            location: "Pittsburgh, Pennsylvania · On-site",
            highlights: [
                "Validated core ePayments flows by mapping API requests to ensure real-time UI data integrity",
                "Executed manual and automated regression test suites using Cucumber and Selenium",
                "Verified backend transactional data across OracleSQLDeveloper and MongoDB"
            ],
        },
        {
            title: "Software Developer",
            company: "Tern",
            dates: "May 2025 - January 2026",
            location: "New York, New York · Remote",
            highlights: [
                "Streamlined UI development by 30% using Carbon Design System, Next.js, and TailwindCSS.",
                "Reduced post-deployment issues and improved development speed by 25%.",
                "Specialized in building high-performance and adaptive Firebase AI web applications.",
                "Created Carbon Design components with innovative features in React and Next.js frameworks.",
                "Operated in Git Bash to validate live deployments and update features through GitHub pull requests.",
                "Managed tasks in Jira to meet sprint goals and resolved tickets based on QA and COO feedback.",
                "Improved system reliability by developing Jest end-to-end tests to validate back-end data flows.",
                "Managed REST API integration and ensured consistent uptime and seamless data flow between services.",
            ],
        },
    ];

    const backendSkills = [
        "Google Firebase",
        "Oracle SQL",
        "MongoDB",
        "Python", 
        "Java", 
        "Node",
        "Postman (REST APIs)",
        "Protocol Buffers",
        "Kotlin",
        "Kubernetes",
        "Docker",
        "SQLite",
        "Swift Concurrency",
        "Machine Learning",
        "C",
        "C++",
        "C#",
        "Node.js",
        "Spring Boot",
        "Basic understanding of AWS, KQL, SQL (with MySQL and NoSQL)"
    ];

    const automatedTestingSkills = [
        "Selenium",
        "Cucumber",
        "Playwright",
        "Vitest",
        "Lint (in Git Repo and Git Bash)"
    ];

    const gherkinSkills = [
        "Gherkin",
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
                        <p className="text-gray-300 mb-6">
                            Oscar is a passionate developer with expertise in building scalable web applications, making new friends, traveling, and following ice hockey.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Testing & QA</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {automatedTestingSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {gherkinSkills.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <div className="space-y-6 text-gray-300">
                                    {education.map((edu) => (
                                        <div
                                            key={`${edu.school}-${edu.degree}`}
                                            className="border-l-2 border-blue-500/40 pl-4"
                                        >
                                            <h4 className="font-bold text-white">{edu.school}</h4>
                                            <p className="text-sm text-gray-300">{edu.degree}</p>
                                            <p className="text-sm text-gray-400">{edu.dates}</p>
                                            {edu.coursework.length > 0 && (
                                                <>
                                                    <p className="text-sm text-gray-300 mt-3 font-medium">Relevant Coursework:</p>
                                                    <ul className="list-disc list-outside ml-4 mt-1 space-y-1 text-sm">
                                                        {edu.coursework.map((course) => (
                                                            <li key={course}>{course}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                <div className="space-y-6 text-gray-300">
                                    {workExperience.map((job) => (
                                        <div
                                            key={`${job.title}-${job.company}`}
                                            className="border-l-2 border-blue-500/40 pl-4"
                                        >
                                            <h4 className="font-bold text-white">{job.title}</h4>
                                            <p className="text-sm text-gray-300">{job.company}</p>
                                            <p className="text-sm text-gray-400">{job.dates}</p>
                                            <p className="text-sm text-gray-400">{job.location}</p>
                                            {job.highlights.length > 0 && (
                                                <ul className="list-disc list-outside ml-4 mt-3 space-y-2 text-sm">
                                                    {job.highlights.map((highlight) => (
                                                        <li key={highlight}>{highlight}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
