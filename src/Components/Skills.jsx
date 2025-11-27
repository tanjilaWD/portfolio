import React from "react";
import { motion } from "framer-motion";
import {
    SiReact,
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiNodedotjs,
    SiMongodb,
    SiNextdotjs,
    SiGit,
    SiGithub,
    SiTailwindcss,
    SiPostman,
    SiFirebase,
} from "react-icons/si";

const skills = [
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Express.js", icon: <SiExpress />, color: "#AAAAAA" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "white" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "Git", icon: <SiGit />, color: "#F1502F" },
    { name: "GitHub", icon: <SiGithub />, color: "white" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
];

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            id="skills"
            className="py-20 bg-[#0f0f0f]"
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                    My <span className="text-purple-600">Skills</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-14">
                    Tools & technologies I use to build dope digital experiences
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.06,
                                boxShadow: `0px 0px 20px ${skill.color}55`,
                            }}
                            transition={{ duration: 0.25 }}
                            className="group bg-[#171717] p-4 rounded-xl flex flex-col items-center gap-2
                                       cursor-pointer shadow-md shadow-black/40 
                                       hover:bg-[#1f1f1f] border border-transparent
                                       hover:border-purple-600/40"
                        >
                            <span
                                className="text-3xl transition-all duration-300 group-hover:scale-105"
                                style={{ color: skill.color }}
                            >
                                {skill.icon}
                            </span>

                            <p className="font-medium text-white/90 text-base group-hover:text-white">
                                {skill.name}
                            </p>

                            {/* Small Glow Bar */}
                            <div
                                className="h-1 w-8 rounded-full opacity-60 transition-all duration-300 group-hover:w-10"
                                style={{ backgroundColor: skill.color }}
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
