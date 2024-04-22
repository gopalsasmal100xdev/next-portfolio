"use client";
import SectionWrapper from "../sub/SectionWrapper";
import ContactForm from "../sub/ContactForm";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
      <h2 className="text-center text-white font-bold text-4xl">Contact Me</h2>
      <ContactForm />
    </SectionWrapper>
  );
}
