"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { contact_desc } from "@/constants";
import { Textarea } from "../ui/textarea";
import React, { useState } from "react";
import Globe2 from "./Globe2";

export default function ContactForm() {
  const [fullname, setFullname] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    console.log(fullname, email, message);
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[700px]">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2 text-start text-white">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Get in touch
            </h1>
            <p className="text-balance text-white">{contact_desc}</p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Full Name</Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="John Doe"
                  value={fullname || ""}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="test@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here."
                  value={message || ""}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" variant={"primary"} className="w-full">
                Send Message🕊️
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block">
        <Globe2 />
      </div>
    </div>
  );
}
