"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import img from "../../../../public/about-image/about-img.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wed from "../../../../public/services-images/wedding.jpg";
import prewed from "../../../../public/services-images/pre-wed.jpg";
import baby from "../../../../public/services-images/baby.jpg";
import maternity from "../../../../public/services-images/maternity.jpg";
const About = () => {
   if (typeof window !== "undefined") {
      gsap.registerPlugin(useGSAP);

      gsap.registerPlugin(ScrollTrigger);
   }
   const aboutParaRef = useRef(null);
   const aboutImgRef = useRef(null);
   const weddingImgRef = useRef(null);
   const maternityImgRef = useRef(null);
   const prewedImgRef = useRef(null);
   const babyImgRef = useRef(null);
   const weddingTextRef = useRef(null);
   const maternityTextRef = useRef(null);
   const prewedTextRef = useRef(null);
   const babyTextRef = useRef(null);

   useGSAP(() => {
      gsap.to(aboutParaRef.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: aboutParaRef.current,
         },
      });
      gsap.to(aboutImgRef.current, {
         translateY: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: aboutImgRef.current,
         },
      });
      gsap.to(weddingImgRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: weddingImgRef.current,
         },
      });
      gsap.to(maternityImgRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: maternityImgRef.current,
         },
      });
      gsap.to(babyImgRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: babyImgRef.current,
         },
      });
      gsap.to(prewedImgRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: prewedImgRef.current,
         },
      });
      gsap.to(weddingTextRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: weddingTextRef.current,
         },
      });
      gsap.to(maternityTextRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: maternityTextRef.current,
         },
      });
      gsap.to(babyTextRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: babyTextRef.current,
         },
      });
      gsap.to(prewedTextRef.current, {
         translateX: 0,
         opacity: 1,
         duration: 0.5,
         delay: 0.5,
         scrollTrigger: {
            trigger: prewedTextRef.current,
         },
      });
   });
   const [services, setServices] = useState([
      {
         img: wed,
         title: "Wedding Photography",
         text: "At IM Photography Studio, we understand that your wedding day is one of the most significant moments in your life. Our wedding photography services are designed to capture every smile, tear, and joyous moment in stunning detail. From the intimate exchange of vows to the grand celebration, our talented photographers are dedicated to creating a beautiful and timeless wedding album that tells your unique love story. We use the latest equipment and techniques to ensure that every shot is perfect, so you can relive your special day for years to come.",
      },
      {
         img: prewed,
         title: "Pre-Wedding Photography",
         text: "Celebrate the journey to your big day with our enchanting pre-wedding photography sessions. At IM Photography Studio, we specialize in creating magical and romantic pre-wedding photos that reflect the chemistry and connection between you and your partner. Whether you prefer a serene outdoor setting or an elegant indoor backdrop, our creative team will work with you to design a customized shoot that perfectly captures your love story. Let us help you preserve these special moments before you say 'I do.'",
      },
      {
         img: maternity,
         title: "Maternity Photography",
         text: "Embrace the beauty of motherhood with our exquisite maternity photography services. Pregnancy is a miraculous and transformative time, and our skilled photographers are here to capture the glow and joy of expectant mothers. At IM Photography Studio, we create elegant and artistic maternity portraits that celebrate the anticipation of your new arrival. With a variety of beautiful settings and props, we ensure that each maternity photo session is a comfortable and memorable experience for you and your family.",
      },
      {
         img: baby,
         title: "Baby Shoot",
         text: "Our delightful baby shoots are designed to capture the innocence and charm of your little ones. At IM Photography Studio, we understand the importance of preserving the early moments of your child's life. Our experienced photographers are skilled in working with babies and creating a fun and relaxed environment for the shoot. From adorable newborn portraits to playful toddler photos, we use creative setups and props to ensure that each baby shoot is filled with joy and precious memories.",
      },
   ]);

   return (
      <section className="my-[80px] px-4 md:px-[22px]">
         <h2 className="text-center text-[26px] md:text-[42px] ">
            <span className="text-primary font-bold">
               About IM Photography Studio:{" "}
            </span>
            Kumbakonam's Premier Photography Experience
         </h2>
         <div className="flex flex-col lg:flex-row justify-center items-center my-[40px]">
            <p
               className="w-[100%] lg:w-[40%] text-left font-[roboto] leading-[28px] text-[#787878] translate-y-[32px] opacity-0"
               ref={aboutParaRef}
            >
               <span className="text-black font-bold">
                  Welcome to IM Photography Studio,
               </span>{" "}
               where every moment is a cherished memory. Nestled in the heart of{" "}
               <span className="font-bold text-black">Kumbakonam</span>, our
               professional photography studio specializes in capturing the
               beauty and essence of life's most precious events. Whether you're
               looking for{" "}
               <span className="font-bold text-black">wedding photography</span>{" "}
               to immortalize your big day, maternity photography capture the
               innocence of your little one, or candid photography to seize
               genuine emotions and spontaneous moments, we have you covered.
               Our{" "}
               <span className="font-bold text-black">
                  experienced photographers
               </span>{" "}
               use the{" "}
               <span className="font-bold text-black">
                  latest technologies and creative
               </span>{" "}
               techniques to deliver stunning, high-quality images that you'll
               treasure forever. Choose IM Photography Studio in Kumbakonam for
               all your photography needs and let us turn your special moments
               into timeless memories...
            </p>
            <Image
               src={img}
               alt="about section image "
               className={`w-[100%] lg:w-[600px] rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] translate-y-[-32px] opacity-0`}
               ref={aboutImgRef}
            />
         </div>
         <div>
            <h2 className="text-center text-[26px] md:text-[42px] ">
               <span className="text-primary">Our</span> Services
            </h2>
            <div>
               <div className="">
                  {services.map((service, index) => {
                     return (
                        <div
                           key={index}
                           className="flex flex-col md:flex-row items-center gap-4  justify-center odd:flex-col  md:odd:flex-row-reverse  text-left"
                        >
                           <div
                              className={`w-[100%] md:w-[50%] translate-x-[${
                                 service.title === "Wedding Photography" ||
                                 service.title === "Maternity Photography"
                                    ? "32px"
                                    : "-32px"
                              }] opacity-0`}
                              ref={
                                 service.title === "Wedding Photography"
                                    ? weddingTextRef
                                    : service.title === "Maternity Photography"
                                    ? maternityTextRef
                                    : service.title ===
                                      "Pre-Wedding Photography"
                                    ? prewedTextRef
                                    : babyTextRef
                              }
                           >
                              <h3 className="font-bold text-[24px] md:text-[28px] mt-[22px] md:mt-0">
                                 {service.title}
                              </h3>
                              <p>{service.text}</p>
                           </div>
                           <div>
                              <Image
                                 src={service.img}
                                 alt={service.title}
                                 ref={
                                    service.title === "Wedding Photography"
                                       ? weddingImgRef
                                       : service.title ===
                                         "Maternity Photography"
                                       ? maternityImgRef
                                       : service.title ===
                                         "Pre-Wedding Photography"
                                       ? prewedImgRef
                                       : babyImgRef
                                 }
                                 className={`w-[100%] md:w-[400px] h-auto rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] ${
                                    service.title === "Wedding Photography" ||
                                    service.title === "Maternity Photography"
                                       ? "translate-x-[-32px] opacity-0"
                                       : "translate-x-[32px] opacity-0"
                                 }`}
                              />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
