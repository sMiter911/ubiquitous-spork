"use client";

import {
  Typography,
  Input,
  Button,
  Select,
  Option,
  Checkbox,
} from "@material-tailwind/react";
import { Footer } from "@/components";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  email: string;
  country: string;
  premiumInterest: boolean;
};

const countries = [
  "South Africa",
  "United States",
  "United Kingdom", 
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Other"
];

const ContactForm: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [premiumInterest, setPremiumInterest] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const formData = {
        ...data,
        country: selectedCountry,
        premiumInterest: premiumInterest,
      };
      console.log("Expansion waitlist form submitted:", formData);
      // Handle form submission here
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="px-8 py-20 bg-gray-50" id="contact">
      <div className="container mx-auto max-w-2xl text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-6"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Not in your area yet?
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mb-12 !text-gray-600"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Help us prioritize where to launch next! Enter your email and select your country to join our expansion waitlist.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              size="lg"
              label="Enter your email address"
              placeholder="your.email@example.com"
              error={!!errors.email}
              className="!border-gray-300 focus:!border-green-500"
              labelProps={{
                className: "!text-gray-600",
              }}
              crossOrigin=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            />
            
            <Select
              size="lg"
              label="Select your country"
              value={selectedCountry}
              onChange={(value) => {
                setSelectedCountry(value || "");
                setValue("country", value || "");
              }}
              className="!border-gray-300 focus:!border-green-500"
              labelProps={{
                className: "!text-gray-600",
              }}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {countries.map((country) => (
                <Option key={country} value={country}>
                  {country}
                </Option>
              ))}
            </Select>
          </div>

          <div className="flex items-center justify-center gap-3 py-4">
            <Checkbox
              checked={premiumInterest}
              onChange={(e) => setPremiumInterest(e.target.checked)}
              className="border-gray-400 checked:bg-green-500 checked:border-green-500"
              crossOrigin=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            />
            <Typography
              variant="small"
              color="gray"
              className="font-medium"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              I'm interested in premium features when available
            </Typography>
          </div>

          <Button
            type="submit"
            size="lg"
            className="bg-green-500 hover:bg-green-600 px-8 py-3"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Join Expansion Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
