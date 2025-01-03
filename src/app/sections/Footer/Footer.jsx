import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
   return (
      <footer className="my-[22px]">
         <div className="w-100% h-[1px] bg-black mx-2"></div>
         <div>
            <h3 className="font-bold text-[24px] md:text-[28px]">
               IM PHOTOGRAPHY
            </h3>
            <p className="text-black">No 4,Anna salai</p>
            <p className="text-black">Kubmakonam</p>
            <p className="text-black">612702</p>
         </div>
         <div className="flex justify-center gap-4">
            <p className="text-black text-[22px]">
               <IoLogoWhatsapp />
            </p>

            <p className="text-black text-[22px]">
               <AiFillInstagram />
            </p>
            <p className="text-black text-[22px]">
               <FaFacebook />
            </p>
         </div>
      </footer>
   );
};

export default Footer;
