// components
import { Navbar } from "@/components";
import Hero from "./hero";
import Features from "./features";
import Pricing from "@/components/pricing";
import ContactForm from "./contact-form";
import Footer from "@/components/footer";

// sections

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <ContactForm />
      <Footer />
    </>
  );
}
