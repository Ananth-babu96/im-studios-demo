"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import About from "./sections/About/About";
import Gallery from "./sections/Gallery/Gallery";
import Footer from "./sections/Footer/Footer";

export default function Home() {
   const heroRef = useRef(null);
   const aboutRef = useRef(null);
   const galleryRef = useRef(null);
   const footerRef = useRef(null);

   return (
      <div className="relative">
         <section>
            <Navbar
               hero={heroRef}
               about={aboutRef}
               gallery={galleryRef}
               footer={footerRef}
            />
         </section>
         <section ref={heroRef}>
            <Hero />
         </section>
         <section ref={aboutRef}>
            <About />
         </section>
         <section ref={galleryRef}>
            <Gallery />
         </section>
         <section ref={footerRef}>
            <Footer />
         </section>
      </div>
   );
}
