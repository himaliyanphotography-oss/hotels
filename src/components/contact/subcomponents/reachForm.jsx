"use client";
import React, { useState } from "react";
import Heading from "../../../components/ui/heading";
import { Input, Textarea } from "@nextui-org/react";
import MagicButton from "../../../components/ui/maginButton";
import axios from "axios";
import { useToast } from "../../../components/ui/use-toast";

export default function ReachForm() {
  const { toast } = useToast();
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async () => {
    try {
      const response = await axios.post(`/api/contact`, {
        mobileNumber,
        name,
        email,
        description,
      });
      console.log(response.data);
      toast({
        description: "Message Sent",
        variant: "default",
      });
    } catch (error) {
      console.error("Error contacting:", error);
      toast({
        description: "Some internal error in contacting",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 flex items-center">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <Heading text={"Reach out to us and Book your Room Now"} />

        <div className="flex flex-col gap-12 mt-10">
          {/* Left Section - Info */}
          <div className="space-y-5">
            <h2 className="text-2xl font-light text-gray-300">
              Experience a stay with us
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              If hospitality is your thing, our team is for you! We are looking
              for dedicated team members who go the extra mile to make every
              guest feel at home.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="bg-gray-900 shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-light text-gray-300 mb-4">Book Now</h2>
            <form className="space-y-6">
              <Input
                type="text"
                label="Name"
                variant="bordered"
                color="white"
                required
                className="w-full rounded-md text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                label="Phone"
                variant="bordered"
                color="white"
                required
                className="w-full rounded-md"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <Input
                type="email"
                label="Email"
                variant="bordered"
                color="white"
                required
                className="w-full rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                label="Message"
                variant="bordered"
                color="white"
                required
                className="w-full rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="pt-4 flex justify-center">
                <MagicButton title={"Submit"} handleClick={onSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
