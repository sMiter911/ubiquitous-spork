"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { FEATURE_LIST } from "@/common/constants/feature_list";
import FeatureCard from "../components/feature-card";

export function Features() {
  return (
    <section className="py-28 px-4" id="features">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Shiphustle App
        </Typography> */}
        <Typography variant="h1" color="blue-gray" className="mb-4">
          SIDE HUSTLING TO THE NEXT LEVEL
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Per lacus aenean
          tincidunt placerat pulvinar. Cursus vel ultrices nullam eros magna.
          Eleifend tincidunt in curae facilisi ante maximus ridiculus gravida.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURE_LIST.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Features;
