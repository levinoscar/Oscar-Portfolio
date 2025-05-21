import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "React", 
        "Vite",
        "Next",
        "JavaScript",
        "TypeScript",
        "HTML/CSS",
        "TailwindCSS", 
        "JSON", 
        "Object-Oriented Programming (OOP)",
        "Figma (UI/UX)", 
        "Tableau",
        "Basic understanding of Swift"
    ];

    const backendSkills = [
        "Node.js", 
        "Python", 
        "Java", 
        "Kotlin",
        "Kubernetes",
        "Firebase",
        "Docker Storage",
        "PostgreSQL", 
        "Basic understanding of C, Amazon Web Services (AWS), REST APIs, Spring Boot, SQL, MongoDB, Oracle SQL, NoSQL, Google Cloud, Microsoft Azure and KQL"
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
                            Oscar is a very passionate developer with expertise in building scalable web
                            applications, making new friends, loves ice hockey, travel and also 
                            creating full-stack innovative solutions.
                        </p>

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
                                    <li>
                                        <strong> Temple University </strong> - Bachelors of Science 
                                        in Computer Science (2019-2024)
                                    </li>
                                    <li>
                                        Relevant Coursework: Data Structures, Data Structures and Algorithms, 
                                        UI/UX Design, Intro to Operating Systems, Mobile Development (Android Studio), 
                                        Machine Learning, Intro to Cloud Computing, Software Security, 
                                        Software Design and Capstone Project (Atlassian Jira)
                                    </li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">
                                            {" "}
                                            Web Developer at OwlHacks (2023){" "}
                                        </h4>
                                        <li>
                                            Developed a high-conversion hackathon registration platform 
                                            that resulted in a 30% increase of event sign-ups 
                                            in comparisons to Fall 2022.
                                        </li>
                                        <li>
                                            Leveraged React.js and JSON for data handling, integrate team roster,
                                            event location, discord link and Major League Hacking (MLH) banners 
                                            as one of OwlHacks main sponsors.
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