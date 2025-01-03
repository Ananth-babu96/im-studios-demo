"use client";
import React, { useState } from "react";

import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
// Import images
import img1 from "../../../../public/gellery-images/g1.jpg";
import img2 from "../../../../public/gellery-images/g2.jpg";
import img3 from "../../../../public/gellery-images/g3.jpg";
import img4 from "../../../../public/gellery-images/g4.jpg";
import img5 from "../../../../public/gellery-images/g5.jpg";
import img6 from "../../../../public/gellery-images/g6.jpg";
import img7 from "../../../../public/gellery-images/g7.jpg";
import img8 from "../../../../public/gellery-images/g8.jpg";
import img9 from "../../../../public/gellery-images/g9.jpg";
import img10 from "../../../../public/gellery-images/g10.jpg";
import img11 from "../../../../public/gellery-images/g11.jpg";
import img12 from "../../../../public/gellery-images/g12.jpg";

const Gallery = () => {
   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

   const galleryImages = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
   ];

   // Open modal with selected image
   const openModal = (index) => {
      setSelectedImageIndex(index);
   };

   // Close modal
   const closeModal = () => {
      setSelectedImageIndex(null);
   };

   // Go to next image
   const nextImage = () => {
      setSelectedImageIndex((prevIndex) =>
         prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
   };

   // Go to previous image
   const prevImage = () => {
      setSelectedImageIndex((prevIndex) =>
         prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
      );
   };

   return (
      <section className="p-[8px]">
         <h2 className="text-center text-[26px] md:text-[42px] ">Gallery</h2>

         {/* Image Grid */}
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[8px]">
            {galleryImages.map((image, index) => {
               return (
                  <div
                     key={index}
                     className="relative overflow-hidden shadow-lg group cursor-pointer"
                     onClick={() => openModal(index)} // Open modal on click
                  >
                     {/* Image */}
                     <Image
                        src={image}
                        alt="gallery image"
                        className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
                     />
                     {/* Overlay */}
                     <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
               );
            })}
         </div>

         {/* Modal */}
         {selectedImageIndex !== null && (
            <div
               className="fixed inset-0 bg-black bg-opacity-[0.9] flex items-center justify-center z-50"
               onClick={closeModal} // Close modal when clicking outside
            >
               <div
                  className="relative p-4"
                  onClick={(e) => e.stopPropagation()} // Prevent modal close on inner clicks
               >
                  {/* Close Button */}
                  <button
                     onClick={closeModal}
                     className="absolute top-2 right-2 text-white text-2xl"
                  >
                     <FaTimes />
                  </button>

                  {/* Prev Button */}
                  <button
                     onClick={prevImage}
                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
                  >
                     <IoIosArrowBack />
                  </button>

                  {/* Next Button */}
                  <button
                     onClick={nextImage}
                     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
                  >
                     <IoIosArrowForward />
                  </button>

                  {/* Full-Size Image */}
                  <Image
                     src={galleryImages[selectedImageIndex]}
                     alt="Selected"
                     className="max-w-full max-h-[90vh] object-contain"
                  />
               </div>
            </div>
         )}
      </section>
   );
};

export default Gallery;
