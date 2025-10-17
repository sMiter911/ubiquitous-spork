"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import VideoGallery from "./video-gallery";

const galleryImages = [
  {
    src: "/image/1_1_white.jpg",
    alt: "ShipHustle App Screenshot 1",
  },
  {
    src: "/image/1_2_white.jpg",
    alt: "ShipHustle App Screenshot 2",
  },
  {
    src: "/image/1_3_white.jpg",
    alt: "ShipHustle App Screenshot 3",
  },
  {
    src: "/image/1_4_white.jpg",
    alt: "ShipHustle App Screenshot 4",
  },
];

export function Gallery() {
  return (
    <>
      <section className="py-16 px-4" id="gallery">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4"
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              App Gallery
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full px-4 !text-gray-500 lg:w-8/12"
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              Take a look at our app in action and see how ShipHustle can help you connect with your local community.
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={800}
                    className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />
    </>
  );
}

export default Gallery;