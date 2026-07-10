"use client"

import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function Header() {
  return (
    <section className="realtive h-screen overflow-hidden">
      <motion.div className="relative w-full h-full"
      initial= {{opacity: 0}}
      animate= {{opacity: 1}}
      transition={{duration: 1.7, ease: easeInOut}}
      >
      <Image
        src="/header.jpg"
        alt="Header"
        fill
        priority
        className="object-cover"
        />
        </motion.div>

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className=" flex max-w-8xl items-end justify-between mx-30 px-8 pb-16">
          {/* Left */}
          <h1
            className="font-garamond max-w-3xl text-9xl font-bold text-white"
            style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}
          >
            Fine Dining <br />
            & Restaurant
          </h1>

          {/* Right */}
          <div className="max-w-lg text-left mr-20">
            <p className="mb-6 text-2xl text-[#B5B9BC] ">
              A refined dining experience where elegance blends with unforgettable tastes.
            </p>

            <button className="rounded-full bg-[#9A5634] px-8 py-4 text-white font-semibold transition hover:bg-[#7e462a]">
              Reserve Your Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}