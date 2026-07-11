"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SlidePhoto = {
    caption: string;
    image: string;
};

const img = (keywords: string, lock: number): string =>
    `https://loremflickr.com/700/520/${keywords}/all?lock=${lock}`;

const SLIDES = [
    [
        { caption: "The grand dining hall", image: img("restaurant,arches,interior,night", 11) },
        { caption: "The prestige lounge", image: img("restaurant,patio,lights,evening", 12) },
        { caption: "The sommelier’s reserve", image: img("restaurant,terrace,tables", 13) },
    ],
    [
        { caption: "The grand dining hall", image: img("restaurant,arches,interior,night", 11) },
        { caption: "The prestige lounge", image: img("restaurant,patio,lights,evening", 12) },
        { caption: "The sommelier’s reserve", image: img("restaurant,terrace,tables", 13) },

    ],
    [
        { caption: "The grand dining hall", image: img("restaurant,arches,interior,night", 11) },
        { caption: "The prestige lounge", image: img("restaurant,patio,lights,evening", 12) },
        { caption: "The sommelier’s reserve", image: img("restaurant,terrace,tables", 13) },
    ],
    [
        { caption: "The grand dining hall", image: img("restaurant,arches,interior,night", 11) },
        { caption: "The prestige lounge", image: img("restaurant,patio,lights,evening", 12) },
        { caption: "The sommelier’s reserve", image: img("restaurant,terrace,tables", 13) },
    ],
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" as const } },
};

function Frame({ photo }: { photo: SlidePhoto }) {
    return (
        <motion.figure variants={item} className="flex flex-col gap-4">
            <div className="relative h-[340px] w-full overflow-hidden rounded-md">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={photo.image}
                        src={photo.image}
                        alt={photo.caption}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>
            </div>
            <figcaption className="font-serif text-lg text-[#F4EFE6]">
                {photo.caption}
            </figcaption>
        </motion.figure>
    );
}

export default function Images() {
    const [slide, setSlide] = useState(0);
    const photos = SLIDES[slide];

    return (
        <section className="min-h-screen w-full bg-[#231F1B] px-6 py-24">
            <div className="mx-auto max-w-8xl">
                <h2 className="text-center font-semibold text-6xl leading-tight text-[#F4EFE6] sm:text-7xl"
                    style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}>
                    Atmosphere of
                    <br />
                    elegance &amp; comfort
                </h2>

                <div className="relative mt-16 min-h-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide}
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            {photos.map((photo) => (
                                <Frame key={photo.caption} photo={photo} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-14 flex items-center justify-center gap-2">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSlide(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === slide ? "bg-[#B5651D]" : "bg-neutral-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}