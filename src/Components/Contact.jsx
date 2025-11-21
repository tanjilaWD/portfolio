import React from 'react';
import { motion } from 'framer-motion';
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn,FaGithub  } from 'react-icons/fa';
const Contact = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-[#1f1f1f]'
        >
        <div className='container mx-auto px-6'>
         <h2 className="text-3xl font-bold text-center mb-4">
            Get In
            <span className="text-purple-700"> Touch</span>
         </h2>
         <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">Have a project in mind or want to collaborate? Let's talk!</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
        <div>
            <form action="" className='space-y-6'>
             <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'></label>
                <input type="text" placeholder='Your Name'
                className='w-full bg-[#282727] border border-[#3d3d3d] rounded-lg px-4 py-3 outline-none'/>
             </div>
             <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'></label>
                <input type="email" placeholder=' Enter Your Email Address'
                className='w-full bg-[#282727] border border-[#3d3d3d] rounded-lg px-4 py-3 outline-none'/>
             </div>
             <div>
                <label htmlFor="text" className='block text-gray-300 mb-2'></label>
                <textarea type="text" placeholder='Message'
                className='w-full h-40 bg-[#282727] border border-[#3d3d3d] rounded-lg px-4 py-3 outline-none'/>
             </div>
             <button type='submit' className='w-full px-6 py-3 bg-purple-600 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
              Send Message
             </button>
            </form>
        </div>

         <div className='space-y-8'>
  {/* Location */}
  <div className='flex items-start space-x-4'>
    <div className='text-purple-500 text-2xl mt-1'>
      <FaMapMarkerAlt />
    </div>
    <div>
      <h3 className='font-semibold text-white'>Location</h3>
      <p className='text-gray-300'>Khulna, Dhaka</p>
    </div>
  </div>

  {/* Phone */}
  <div className='flex items-start space-x-4'>
    <div className='text-purple-500 text-2xl mt-1'>
      <FaPhoneAlt />
    </div>
    <div>
      <h3 className='font-semibold text-white'>Phone</h3>
      <p className='text-gray-300'>+880 1936129996</p>
    </div>
  </div>

  {/* Email */}
  <div className='flex items-start space-x-4'>
    <div className='text-purple-500 text-2xl mt-1'>
      <FaEnvelope />
    </div>
    <div>
      <h3 className='font-semibold text-white'>Email</h3>
      <p className='text-gray-300'>Tanjilabithi12@email.com</p>
    </div>
  </div>

  {/* Social Media */}
  <div className='flex items-center space-x-4'>
    <a href='https://www.facebook.com/profile.php?id=100057956989237' className='text-purple-500 text-xl hover:text-purple-400'>
      <FaFacebookF />
    </a>
    <a href='#' className='text-purple-500 text-xl hover:text-purple-400'>
      <FaTwitter />
    </a>
    <a href='https://www.linkedin.com/in/tanjila-khatun-9051b0328' className='text-purple-500 text-xl hover:text-purple-400'>
      <FaLinkedinIn />
    </a>
    <a href='https://github.com/tanjilaWD' className='text-purple-500 text-xl hover:text-purple-400'>
      <FaGithub />
    </a>
  </div>
</div>
</div>
</motion.div>
    );
};

export default Contact;