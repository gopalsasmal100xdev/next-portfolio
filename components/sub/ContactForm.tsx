"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { contact_desc } from "@/constants";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";

export default function ContactForm() {
  const [fullname, setFullname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [userIp, setUserIp] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({ fullname, email, message, userIp }),
      });
      setLoading(false);
      setEmail("");
      setFullname("");
      setMessage("");
      toast({
        title: "✅ Email Send Successfully!",
        description: "Thak You for sending message!💖",
      });
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }

    setLoading(false);
  }

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        setUserIp(String(data.ip));
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, []);

  return (
    <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
      <div className="flex-1">
        <h3 className="text-2xl pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Get in touch
        </h3>
        <p className="text-gray-400 mb-4 text-sm md:text-base">
          {contact_desc}
        </p>

        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 rounded-xl">
          <input
            onChange={(e) => setFullname(e.target.value)}
            required
            value={fullname || ""}
            name="name"
            type="text"
            placeholder="Full Name *"
            className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4 text-white font-bold"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email || ""}
            name="email"
            type="email"
            placeholder="Email *"
            className="outline-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4 text-white font-bold"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message || ""}
            name="message"
            rows={4}
            placeholder="Message *"
            className="outline-none resize-none bg-gray-800 placeholder-gray-400 rounded-lg py-3 px-4 text-white font-bold"
          />
          <button
            disabled={loading}
            className={`p-2 pl-3 pr-3 button-primary text-center text-white rounded-lg w-auto ${
              loading ? "cursor-not-allowed" : "cursor-pointer"
            }`}>
            Send 🕊️
          </button>
        </form>
      </div>
      <Image
        unoptimized={true}
        quality={100}
        alt="contact"
        src="/contact.png"
        className="hidden md:block w-1/2 h-full object-cover"
        width={1000}
        height={1000}
      />
    </div>
  );
}
