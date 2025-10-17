"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { FEATURE_LIST } from "@/common/constants/feature_list";
import FeatureCard from "../components/feature-card";
import Gallery from "../components/gallery";

export function Features() {
  return (
    <section className="py-28 px-4" id="features">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Shiphustle App
        </Typography> */}
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          SIDE HUSTLING TO THE NEXT LEVEL
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8"
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          Shiphustle is a directory of people with skills and talents in your local area.
          Whether you&apos;re looking for someone to fix your car, design a logo, or bake a cake, you can find skilled people nearby.
          It&apos;s a simple way to connect with local customers, share updates, and chat in real time — all from your own &apos;Hustle&apos; profile. Whether you&apos;re building a side hustle or growing a small business, Shiphustle is built to help you get seen and grow in your community.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURE_LIST.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>

      {/* Gallery Section */}
      <Gallery />
    </section>
  );
}

export default Features;