"use client"

import React from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["About Us", "Food Menu", "Ambiance", "Testimonial"];

export default function Footer() {
    return (
        <div className="bg-[#F4F1EA]">
            <footer className="relative bg-[#171009]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative z-10 mx-auto -mt-40 max-w-6xl bg-[#A85A38] px-10 py-14 sm:px-14"
                >
                    <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
                        <h2 className="font-semibold text-4xl leading-tight text-[#F4EFE6] sm:text-5xl"
                            style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}>
                            Indulge in a
                            <br />
                            Dining Experience
                            <br />
                            Beyond Compare.
                        </h2>

                        <div className="max-w-xs sm:text-right">
                            <p className="text-sm leading-relaxed text-[#F4EFE6]/80">
                                The attention to detail in every dish was astounding – the
                                flavors were exquisite, and the presentation was like a work.
                            </p>
                            <button className="mt-6 rounded-full bg-[#F4EFE6] px-7 py-4 text-sm font-semibold text-neutral-900 transition-transform hover:scale-[1.03]">
                                Reserve Table Now
                            </button>
                        </div>
                    </div>
                </motion.div>
                <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 text-center">
                    <div className="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            fill="#9A5634"
                            className="w-20 h-20"
                        >
                            <path d="M6.33 18.45v8.59c0 .41.34.75.75.75h15.13c.41 0 .75-.34.75-.75v-8.6c1.91-.75 3.27-2.6 3.27-4.77 0-2.83-2.3-5.13-5.13-5.13-.56 0-1.13.1-1.67.28-1.2-1.87-3.24-3.01-5.49-3.01s-4.09 1.02-5.31 2.75c-3.06-.27-5.56 2.14-5.56 5.11 0 2.17 1.36 4.02 3.27 4.77Zm1.5 7.84v-1.87h13.63v1.87H7.83Zm13.63-7.48v4.11H7.83v-4.11Zm-13.27-8.76c.18 0 .36.02.56.05h.02c1.72.33 2.97 1.83 2.97 3.57 0 .41.34.75.75.75s.75-.34.75-.75c0-2.05-1.23-3.85-3.04-4.67.94-1.07 2.29-1.7 3.74-1.7 1.91 0 3.64 1.07 4.5 2.79.09.18.25.31.43.38.19.06.39.05.57-.04.52-.26 1.09-.4 1.65-.4 2 0 3.63 1.63 3.63 3.63s-1.63 3.63-3.63 3.63H8.19c-2 0-3.63-1.63-3.63-3.63s1.63-3.63 3.63-3.63Z" />
                        </svg>
                    </div>

                    <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                        {NAV_LINKS.map((label) => (
                            <a
                                key={label}
                                href="#"
                                className="font-serif text-lg text-[#D8D3C4] transition-colors hover:text-[#F4EFE6]"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="border-t border-white/10">
                    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-[#D8D3C4] sm:flex-row">
                        <p className="text-center sm:text-left">
                            483 George Street
                            <br className="sm:hidden" /> Sydney, Australia
                        </p>
                        <p>+61 418 527 934</p>
                        <p>hello@finedine.com</p>
                        <div className="flex items-center gap-3">
                            {[].map((Icon, i) => (
                                <span
                                    key={i}
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-900"
                                >
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="border-t border-white/10 py-5 text-center text-xs text-[#8C877A]">
                    2026 Fine Dine, All rights reserved.
                </p>
            </footer>
        </div>
    );
}