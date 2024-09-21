"use client";
import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Privacy Policy"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 py-30">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-white">
            &copy; {CURRENT_YEAR} Shiphustle. All rights reserved.
          </Typography>
          <ul className="flex gap-8 items-center">
            <Typography
              as="a"
              href="/privacy"
              variant="small"
              className="font-normal text-white hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Typography>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
