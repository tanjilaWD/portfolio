import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="py-20 bg-[#1f1f1f]"
    >
      {/* Heading */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About <span className="text-purple-700">Me</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Get to know more about my background and passion
        </p>
      </div>

      {/* About Me Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg"
      >
        <p className="text-lg md:text-xl leading-relaxed">
          Hey there! I’m{' '}
          <span className="font-bold text-purple-500">Tanjila Khatun</span>, a{' '}
          <span className="font-semibold">MERN stack developer</span> from Khulna 🎯. Just wrapped up my{' '}
          <span className="italic">Diploma in CST</span> at{' '}
          <span className="underline">Khulna Mohila Polytechnic Institute</span>, and I’m all about turning cool ideas into slick web apps using{' '}
          <span className="font-medium text-purple-400">MongoDB, Express, React & Node</span>.
          <br />
          <br />
          Coding isn’t just my work—it’s my playground! I’m constantly{' '}
          <span className="text-purple-300">learning, experimenting, and leveling up my skills</span>. Always excited to{' '}
          <span className="font-bold text-purple-500">build something new and impactful 💻</span>.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
