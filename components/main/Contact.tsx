"use client";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "../sub/SectionWrapper";
import { useState } from "react";
import ContactForm from "../sub/ContactForm";

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [user, setUser] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-white font-bold text-4xl">Contact Me</h2>
      {/* <ToastContainer /> */}
      <ContactForm />
    </SectionWrapper>
  );
}
