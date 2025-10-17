import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
      placeholder=""
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="https://www.material-tailwind.com"
          target="_blank"
          className="flex items-center"
        >
          <Image
            src="/logos/icon.png"
            alt="ShipHustle"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          <Link href="#">Home</Link>
          <Link href="#features">About Us</Link>
          <Link href="#features">Gallery</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#contact">Contact Us</Link>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            ripple={false}
            placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            <a
              href="https://x.com/shiphustle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter text-base" />
            </a>
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            ripple={false}
            placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }}
          >
            <a
              href="https://www.facebook.com/profile.php?id=100093340880611"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook text-base" />
            </a>
          </IconButton>
          {/* <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton> */}
          <ThemeToggle />
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          ripple={false}
          placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <Link href="#">Home</Link>
            <Link href="#features">About Us</Link>
            <Link href="#features">Gallery</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact Us</Link>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton
              variant="text"
              color="gray"
              size="sm"
              ripple={false}
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton
              variant="text"
              color="gray"
              size="sm"
              ripple={false}
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
            >
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            {/* <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton> */}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
