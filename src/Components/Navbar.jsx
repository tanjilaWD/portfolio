
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <div>
                    <a href="#" className="text-3xl font-bold text-white">
                        Tanjila
                        <span className="text-purple-700">
                            Khatun
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full ml-1"></span>
                        </span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <a href="#home" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Home</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#about" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>About</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#skills" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Skills</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#projects" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Projects</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>

                    <a href="#contact" className="relative text-white/80 transition duration-300 hover:text-purple-500 group">
                        <span>Contact</span>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    {showMenu ? (
                        <FaXmark
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-2xl cursor-pointer text-white"
                        />
                    ) : (
                        <FaBars
                            onClick={() => setShowMenu(!showMenu)}
                            className="text-2xl cursor-pointer text-white"
                        />
                    )}
                </div>
            </div>

            {/* Mobile menu */}
           {/* Mobile Menu */}
{showMenu && (
  <div className="md:hidden absolute top-[70px] left-0 w-full px-6">

    <div className="bg-[#1d1d1d] rounded-xl p-6 flex flex-col space-y-6 
      shadow-xl border border-white/10 
      animate-slideDown">

      <a
        href="#home"
        onClick={() => setShowMenu(false)}
        className="text-white/80 hover:text-purple-500 transition text-xl"
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setShowMenu(false)}
        className="text-white/80 hover:text-purple-500 transition text-xl"
      >
        About
      </a>

      <a
        href="#skills"
        onClick={() => setShowMenu(false)}
        className="text-white/80 hover:text-purple-500 transition text-xl"
      >
        Skills
      </a>

      <a
        href="#projects"
        onClick={() => setShowMenu(false)}
        className="text-white/80 hover:text-purple-500 transition text-xl"
      >
        Projects
      </a>

      <a
        href="#contact"
        onClick={() => setShowMenu(false)}
        className="text-white/80 hover:text-purple-500 transition text-xl"
      >
        Contact
      </a>

    </div>
  </div>
)}

        </nav>
    );
};

export default Navbar;
