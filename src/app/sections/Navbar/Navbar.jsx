"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import logo from "../../../../public/logo/logo.png";

const Navbar = ({ hero, about, gallery, footer }) => {
   useGSAP();
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const scrollToSection = (sectionRef) => {
      window.scrollTo({
         top: sectionRef.current.offsetTop,
         behavior: "smooth",
      });
      setIsOpen(false); // Close the mobile menu after clicking
   };

   useEffect(() => {
      if (isOpen) {
         gsap.fromTo(
            ".menu-item",
            { x: 100, opacity: 0 },
            {
               x: 0,
               opacity: 1,
               delay: 0.2,
               stagger: 0.1,
               duration: 0.5,
               ease: "power3.out",
            }
         );
      }
   }, [isOpen]);

   return (
      <nav>
         <div className="flex justify-between items-center relative text-white p-2 md:px-[42px] z-10">
            <h1 className="text-[black] text-[32px] md:text-[52px] font-black font-[montserrat]">
               IM<span className="text-primary">.</span>
            </h1>

            <ul className="gap-4 hidden md:flex text-[black] font-[roboto] text-[18px]">
               <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => scrollToSection(hero)}
               >
                  Home
               </li>
               <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => scrollToSection(about)}
               >
                  About us
               </li>
               <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => scrollToSection(gallery)}
               >
                  Gallery
               </li>
               <li
                  className="cursor-pointer hover:text-primary"
                  onClick={() => scrollToSection(footer)}
               >
                  Contact us
               </li>
            </ul>

            <div
               className="w-10 h-10 flex md:hidden flex-col justify-between cursor-pointer p-2"
               onClick={toggleMenu}
            >
               <span
                  className={`block h-[4px] bg-black transition-all duration-300 ${
                     isOpen ? "rotate-45 translate-y-[10px]" : ""
                  }`}
               ></span>
               <span
                  className={`block h-[4px] bg-black transition-all duration-300 ${
                     isOpen ? "opacity-0" : ""
                  }`}
               ></span>
               <span
                  className={`block h-[4px] bg-black transition-all duration-300 ${
                     isOpen ? "-rotate-45 -translate-y-[10px]" : ""
                  }`}
               ></span>
            </div>

            <div
               className={`fixed top-[50px] right-0 h-screen w-[100%] bg-primary shadow-lg p-4 transition-all duration-300 ${
                  isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
               }`}
            >
               <ul className="flex flex-col gap-[12px] text-[20px] justify-center items-center h-full">
                  <li
                     className="menu-item cursor-pointer hover:text-primary"
                     onClick={() => scrollToSection(hero)}
                  >
                     Home
                  </li>
                  <li
                     className="menu-item cursor-pointer hover:text-primary"
                     onClick={() => scrollToSection(about)}
                  >
                     About
                  </li>
                  <li
                     className="menu-item cursor-pointer hover:text-primary"
                     onClick={() => scrollToSection(gallery)}
                  >
                     Services
                  </li>
                  <li
                     className="menu-item cursor-pointer hover:text-primary"
                     onClick={() => scrollToSection(footer)}
                  >
                     Contact
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
