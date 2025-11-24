import React from 'react';
import { motion } from 'framer-motion';
import {assets} from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease:'easeOut'}}
        viewport={{once:true}}
        id="home"
        className='min-h-screen flex items-center pt-20 pb-16 bg-[linear-gradient(to_right,#726b6b2e_1px,transparent_1px),linear-gradient(to_bottom,#726b6b2e_1px,transparent_1px)] bg-[size:20px_20px] '
        >
        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
            {/* left side content */}
         <div className='md:w-1/2 mb-10 md:mb-0'>
        <h1 className='text-4xl md:text-6xl  font-bold mb-4'>Hi I'm <br /> <span className='text-purple-700 text-7xl '>Tanjila khatun</span> </h1>
        <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
        <p className='text-lg text-gray-300 mb-8'>React | Next.js | Node.js | Express.js | MongoDB</p> 
        <div className='flex space-x-4'>
          <a href="#" className='px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300'>Get Resume</a>
          <a href="#about" className='px-6 py-3 border border-purple-500 rounded-lg font-medium hover:bg-purple-600 transition decoration-purple-300'>About Me</a>  
        </div> 
        </div>   
         
         {/* right side content */}
         <div className='md:w-1/2 flex justify-center'>
         <div className='relative size-64 md:size-80'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500  opacity-70'>
            <motion.img 
            animate={{y:[0,-20,0]}}
            transition={{
                duration:4,
                repeat:Infinity,
                repeatType:"loop",
                ease:"backInOut"
            }}

            className='relative rounded-full size-64 md:size-80 object-cover z-10 animate-float'
            src={assets.profileImg} alt="profile image" />

          </div>
         </div>
         </div>
        </div>
            
        </motion.div>
    );
};

export default Hero;