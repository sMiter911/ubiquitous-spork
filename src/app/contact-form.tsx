"use client";

import {
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/components";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

export type FormData = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Form submitted:", data);
      await sendEmail(data);
      // You might want to add some success feedback here
    } catch (error) {
      console.error("Error submitting form:", error);
      // You might want to add some error feedback here
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="px-8 py-16 bg-green-500" id="contact">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h1" color="white" className="mb-4">
            Contact Us
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full lg:w-5/12"
            color="white"
          >
            Ready to get started? Feel free to reach out and join the gig
            economy.
          </Typography>
        </div>
        <div>
          <Card
            shadow={true}
            className="container mx-auto border border-gray/50"
          >
            <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
              <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
                <Typography variant="h4" color="white" className="mb-2">
                  Contact Information
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto mb-8 text-base !text-gray-500"
                >
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </Typography>
                <div className="flex my-2 gap-5">
                  <EnvelopeIcon className="h-6 w-6 text-white" />
                  <Typography variant="h6" color="white" className="mb-2">
                    contact-us@shiphustle.com
                  </Typography>
                </div>
                <div className="flex items-center gap-5">
                  <IconButton variant="text" color="white">
                    <a
                      href="https://www.facebook.com/profile.php?id=100093340880611"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-facebook text-base" />
                    </a>
                  </IconButton>
                  <IconButton variant="text" color="white">
                    <a
                      href="https://x.com/shiphustle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-twitter text-base" />
                    </a>
                  </IconButton>
                </div>
              </div>
              <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    {...register("name", {
                      required: "First name is required",
                    })}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    placeholder="eg. Lucas"
                    error={!!errors.name}
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    {...register("surname", {
                      required: "Last name is required",
                    })}
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    placeholder="eg. Jones"
                    error={!!errors.surname}
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  placeholder="eg. lucas@mail.com"
                  error={!!errors.email}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  error={!!errors.message}
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button
                    type="submit"
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                  >
                    Send message
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <Footer />
      </section>
    </form>
  );
};

export default ContactForm;
