"use client"

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
    name: string;
    quote: string;
    photo: string;
};

const avatar = (keywords: string, lock: number): string =>
    `https://loremflickr.com/200/200/${keywords}/all?lock=${lock}`;

const RING_COLORS = ["#E8B647", "#5FA9AE", "#D9483F"];

const SETS = [
    [
        {
            name: "Emory J Hobel",
            quote:
                "Dining at Luxury was an unforgettable experience! From the moment we stepped in, we were captivated by the elegant ambiance and warm hospitality.",
            photo: avatar("man,portrait,smiling,face", 611),
        },
        {
            name: "Derek Gehl",
            quote:
                "The attention to detail in every dish was astounding – the flavors were exquisite, and the presentation was like a work.",
            photo: avatar("man,portrait,smiling,face", 612),
        },
        {
            name: "Josh Koop",
            quote:
                "From the moment we stepped in, we were captivated by the elegant ambiance and warm hospitality.",
            photo: avatar("man,portrait,smiling,face", 613),
        },
    ],
    [
        {
            name: "Alina Marsh",
            quote:
                "Every course felt considered. The pacing, the plating, the quiet music – it all came together into one seamless evening.",
            photo: avatar("woman,portrait,smiling,face", 621),
        },
        {
            name: "Tomasz Wren",
            quote:
                "The wine pairing alone was worth the visit. Our server clearly knew the menu inside and out.",
            photo: avatar("man,portrait,smiling,face", 622),
        },
        {
            name: "Priya Nandan",
            quote:
                "A rare place where the service matches the food. We'll be back for every anniversary from now on.",
            photo: avatar("woman,portrait,smiling,face", 623),
        },
    ],
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" as const } },
};

function Stars() {
    return (
        <div className="flex justify-center gap-1 text-[#B5651D]">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.4 6L10 14.9l-5.5 3 1.4-6-4.6-4.1 6.1-.6z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({ t, ring }: { t: Testimonial; ring: string }) {
    return (
        <motion.div
            variants={cardVariant}
            className="relative flex flex-col items-center rounded-xl bg-[#E4E1D2] px-8 pb-8 pt-16 text-center"
        >
            <div
                className="absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full p-1"
                style={{ backgroundColor: ring }}
            >
                <img
                    src={t.photo}
                    alt={t.name}
                    className="h-full w-full rounded-full border-4 border-[#F4F1EA] object-cover"
                />
            </div>

            <h3 className="mt-2 font-serif text-2xl text-neutral-900">{t.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{t.quote}</p>

            <div className="mt-6">
                <Stars />
            </div>
        </motion.div>
    );
}

export default function Review() {
    const [setIndex, setSetIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSetIndex((i) => (i + 1) % SETS.length);
        }, 6000);
        return () => clearInterval(id);
    }, []);

    const testimonials = SETS[setIndex];

    return (
        <section className="min-h-screen w-full bg-[#F4F1EA] px-6 py-24">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="font-semibold text-5xl leading-tight text-neutral-900 sm:text-6xl"
                    style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}>
                    Exquisite Experiences,
                    <br />
                    Cherished Moments
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#504F46] font-semibold sm:text-base">
                    The attention to detail in every dish was astounding – the flavors
                    were exquisite, and the presentation was like a work.
                </p>

                <div className="relative mt-20 min-h-[280px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={setIndex}
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={t.name} t={t} ring={RING_COLORS[i]} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-10 flex items-center justify-center gap-2">
                    {SETS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSetIndex(i)}
                            aria-label={`Show testimonial set ${i + 1}`}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === setIndex ? "bg-[#B5651D]" : "bg-neutral-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}