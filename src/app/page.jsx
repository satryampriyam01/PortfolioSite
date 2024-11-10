"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/Menuchaandsatyam.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Hola! I'm Satyam Priyam WHO LOVES COCO SO MUCH Thats why he is smiling here!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Hey love, you know, I’ve been thinking... if we were a Wi-Fi network, you’d be the password because without you, 
            I’m completely lost. I might be in Boston, but every time you smile, I feel like I’m in the middle of a cloud of happiness (no, not the tech cloud, the one that’s way better!). You’re my favorite notification, and every time you text, it’s like my phone’s battery instantly gets a 100% charge—thank you for being my constant source of energy and joy. 
            Also, if you were a software update, I’d never hit ‘remind me later.’ You’ve already updated my heart to the latest version!
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
            </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
