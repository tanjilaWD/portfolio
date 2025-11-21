import React from 'react';
import { motion } from 'framer-motion';
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
} from "react-icons/si";

const skills = [
     { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
     { name: "React", icon: <SiReact /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='py-20 bg-[#1a1a1a]'
        >
            <div className="container mx-auto px-6">
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 text-center'>
                    My <span className="text-purple-700">Skills</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">
                    Technologies I work to bring ideas to life
                </p>

                {/* Skills Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#222222] p-6 rounded-2xl flex flex-col items-center gap-3 
                                       text-white/80 hover:bg-purple-600 hover:text-white cursor-pointer 
                                       shadow-lg shadow-black/30"
                        >
                            <span className="text-4xl">{skill.icon}</span>
                            <p className="font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
