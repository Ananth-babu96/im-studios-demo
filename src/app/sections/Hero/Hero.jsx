"use client";
import React, { useRef } from "react";
import Image from "next/image";
import heroImg from "../../../../public/hero-image/hero.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Hero = () => {
   if (typeof window !== "undefined") {
      gsap.registerPlugin(useGSAP);
      gsap.registerPlugin(ScrollTrigger);
   }
   const refone = useRef(null);
   const reftwo = useRef(null);
   const refthree = useRef(null);
   const reffour = useRef(null);
   const imageref = useRef(null);
   useGSAP(() => {
      gsap.to(refone.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         scrolltrigger: { trigger: refone.current },
      });
      gsap.to(reftwo.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.2,
         scrolltrigger: { trigger: reftwo.current },
      });
      gsap.to(refthree.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.4,
         scrolltrigger: { trigger: refthree.current },
      });
      gsap.to(reffour.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.6,
         scrolltrigger: { trigger: reffour.current },
      });
      gsap.to(imageref.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.6,
         scrolltrigger: { trigger: imageref.current },
      });
   });
   return (
      <div className=" flex-col flex lg:flex-row  justify-center items-center  gap-4 px-4">
         <Image
            src={heroImg}
            alt="image"
            ref={imageref}
            className="object-cover h-[300px] sm:h-[500px] w-[100%] lg:w-[700px] shrink-0 rounded-tl-[70px] rounded-br-[70px] md:rounded-tl-[102px] md:rounded-br-[102px] opacity-0 translate-x-[-54px]"
         />
         <div className="text-left w-[100%] lg:w-[40%]">
            <h1
               className="text-[32px] md:text-[52px] text-primary opacity-0 translate-y-[32px]"
               ref={refone}
            >
               IM Photography
            </h1>
            <h1
               className="text-[32px] md:text-[52px] opacity-0 translate-y-[32px]"
               ref={reftwo}
            >
               No. 1 Photography in Kubmakonam
            </h1>
            <p
               className="text-[16px] md:text-[18px] font-[roboto] mb-[22px] opacity-0 translate-y-[32px]"
               ref={refthree}
            >
               Wedding Shoot / Pre Wedding / Maternity / Baby Shoot / Candid
               Photography
            </p>
            <a
               href="https://wa.me/919994035027"
               className="bg-primary text-white font-[roboto] py-3 px-6 font-bold rounded-tl-[14px] rounded-br-[14px] mt-22px opacity-0 translate-y-[32px]"
               ref={reffour}
            >
               Contact Us
            </a>
         </div>
      </div>
   );
};

export default Hero;
