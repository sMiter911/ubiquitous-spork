"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-green-500 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              EXPLORE THE WORLD OF <br /> SIDE HUSTLING
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Shiphustle is a mobile application that connects individuals with
              side hustles to people looking for additional income opportunities
              in their local area.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              {/* <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button> */}
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/SH-app-2-Photoroom.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white dark:bg-gray-900 p-5 md:p-14 shadow-md">
        <div>
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-3 dark:text-white"
          >
            Your Local Business Community is Here
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 dark:!text-gray-300 lg:w-5/12"
          >
            Shiphustle helps users discover and connect with nearby individuals
            who have listed their side hustles, providing a platform for
            exploring various earning opportunities. Whether you're seeking
            part-time work, freelance gigs, or creative projects
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
