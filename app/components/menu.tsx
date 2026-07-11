"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Dish = {
    title: string;
    desc: string;
    image: string;
};

const img = (keywords: string, lock: number): string =>
    `https://loremflickr.com/600/450/${keywords}/all?lock=${lock}`;

const CUISINES: Record<string, Dish[]> = {
    Pakistani: [
        {
            title: "Beef Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("beef,steak,platter", 101),
        },
        {
            title: "Chicken Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("roast,chicken,lemon", 102),
        },
        {
            title: "Vegetable Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("vegetable,bowl,salad", 103),
        },
        {
            title: "Corn Soup",
            desc: "A refined dining experience where elegance blends with.",
            image: img("corn,soup,bowl", 104),
        },
    ],
    Mexican: [
        {
            title: "Beef Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("beef,steak,platter", 101),
        },
        {
            title: "Chicken Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("roast,chicken,lemon", 102),
        },
        {
            title: "Vegetable Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("vegetable,bowl,salad", 103),
        },
        {
            title: "Corn Soup",
            desc: "A refined dining experience where elegance blends with.",
            image: img("corn,soup,bowl", 104),
        },
    ],
    Spanish: [
        {
            title: "Beef Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("beef,steak,platter", 101),
        },
        {
            title: "Chicken Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("roast,chicken,lemon", 102),
        },
        {
            title: "Vegetable Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("vegetable,bowl,salad", 103),
        },
        {
            title: "Corn Soup",
            desc: "A refined dining experience where elegance blends with.",
            image: img("corn,soup,bowl", 104),
        },
    ],
    Turkish: [
        {
            title: "Beef Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("beef,steak,platter", 101),
        },
        {
            title: "Chicken Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("roast,chicken,lemon", 102),
        },
        {
            title: "Vegetable Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("vegetable,bowl,salad", 103),
        },
        {
            title: "Corn Soup",
            desc: "A refined dining experience where elegance blends with.",
            image: img("corn,soup,bowl", 104),
        },
    ],
    Bengali: [
        {
            title: "Beef Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("beef,steak,platter", 101),
        },
        {
            title: "Chicken Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("roast,chicken,lemon", 102),
        },
        {
            title: "Vegetable Cuisine",
            desc: "A refined dining experience where elegance blends with.",
            image: img("vegetable,bowl,salad", 103),
        },
        {
            title: "Corn Soup",
            desc: "A refined dining experience where elegance blends with.",
            image: img("corn,soup,bowl", 104),
        },
    ],
};

const CATEGORY_NAMES = Object.keys(CUISINES);

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06 },
    },
};

const cardVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.45, ease: "easeInOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.25, ease: "easeInOut" as const } },
};

function DishCard({ dish }: { dish: Dish }) {
    return (
        <motion.div
            variants={cardVariant}
            className="flex flex-col overflow-hidden rounded-2xl bg-[#F4F1EA] border border-black/5"
        >
            <div className="relative h-56 w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={dish.image}
                        src={dish.image}
                        alt={dish.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>
            </div>
            <div className="flex flex-col items-center gap-3 px-6 pb-8 pt-6 text-center">
                <h3 className="font-serif text-2xl text-neutral-900">{dish.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{dish.desc}</p>
                <button className="mt-2 rounded-full border border-[#9A5634] px-6 py-3 text-sm font-medium text-[#9A5634] transition-colors hover:bg-[#9A5634] hover:text-white">
                    See More
                </button>
            </div>
        </motion.div>
    );
}

export default function Menu() {
    const [active, setActive] = useState<string>("Pakistani");
    const dishes = CUISINES[active];

    return (
        <section className="min-h-screen w-full bg-[#E7E6D4] px-6 py-20">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="font-semibold text-6xl leading-tight text-[#050401] sm:text-7xl"
                    style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}>
                    Our signature menu
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#504F46] font-semibold sm:text-base">
                    A refined dining experience where elegance blends with unforgettable
                    tastes. A refined dining experience where elegance blends with
                    unforgettable tastes.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                    {CATEGORY_NAMES.map((name) => (
                        <button
                            key={name}
                            onClick={() => setActive(name)}
                            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${active === name
                                ? "bg-neutral-900 text-white"
                                : "bg-white text-neutral-600 hover:bg-neutral-100"
                                }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <div className="relative mt-12 min-h-[420px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {dishes.map((dish) => (
                                <DishCard key={dish.title} dish={dish} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-10 flex items-center justify-center gap-2">
                    {CATEGORY_NAMES.map((name) => (
                        <span
                            key={name}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${name === active ? "bg-[#B5651D]" : "bg-neutral-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}