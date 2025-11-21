
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Pro Service',
    description: 'Description',
    image: '/image/project1.PNG',
    tech: ['React', 'Tailwind', 'AOS'],
    github: 'https://github.com/tanjilaWD/Pro_Service.git',
    demo: 'https://pro-service-ecru.vercel.app',
  },
  {
    title: 'ihadis-redesign',
    description: 'Description',
    image: '/image/project2.PNG',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/tanjilaWD/ihadis-redesign.git',
    demo: 'https://ihadis-redesign.vercel.app',
  },
  {
    title: 'Flexibble',
    description: 'Description',
    image:'/image/project3.PNG',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/tanjilaWD/Dribble_Clone.git',
    demo: 'https://dribble-clone-two.vercel.app',
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      id="projects"
      className="py-20 bg-[#1f1f1f]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-700">Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">
          A selection of my recent work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
