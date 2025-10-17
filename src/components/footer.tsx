"use client";
import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

const footerLinks = [
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Refunds & Cancellation", href: "/refunds" },
];

export function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <Typography
            variant="small"
            className="text-gray-300 font-normal"
            placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            © {CURRENT_YEAR} Shiphustle. All rights reserved.
          </Typography>

          <div className="flex items-center gap-1 text-gray-300">
            <span className="text-gray-400">|</span>
            {footerLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Typography
                  as="a"
                  href={link.href}
                  variant="small"
                  className="text-green-400 hover:text-green-300 transition-colors font-normal mx-2"
                  placeholder=""
                  onPointerEnterCapture={() => { }}
                  onPointerLeaveCapture={() => { }}
                >
                  {link.name}
                </Typography>
                {index < footerLinks.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
