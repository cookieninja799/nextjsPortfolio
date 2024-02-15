"use client";
import React from "react";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection: React.FC = () => {
  return (
    <section>
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <span>Hello, I&apos;m </span>
            <TypeAnimation
              sequence={[
                "Thommy",
                1000,
                "a Web Developer",
                1000,
                "a Software Developer",
                1000,
                "a Generative AI Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Button>Hire Me</Button>
            <Button variant="outline">Download CV</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar>
            <AvatarImage src="/DSCF3108.JPG" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
