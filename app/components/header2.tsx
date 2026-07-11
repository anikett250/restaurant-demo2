import React from "react";

export default function WhatMakesUsUnique() {
    const stats = [
        { value: "100+", label: "Dishes" },
        { value: "20K+", label: "Guests" },
        { value: "12+", label: "Achievements" },
        { value: "10+", label: "Branches" },
    ];

    return (
        <div className="w-full min-h-screen bg-[#EFEBE1] p-8"
            style={{ fontFamily: 'var(--font-garamond), "Cormorant Garamond", Georgia, serif' }}>
            {/* Title */}
            <h1 className="text-center text-6xl md:text-7xl font-semibold text-[#050401] mb-15 mt-15">
                What makes us unique?
            </h1>

            {/* 2x2 grid - no gap so corners touch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Top-left: Quote */}
                <div className="flex items-center justify-center p-8 h-72 md:h-96">
                    <p className="text-center font-semibold text-7xl md:text-8xl leading-tight text-[#9A5634]">
                        "Seamless blend of elegance and comfort."
                    </p>
                </div>

                {/* Top-right: image */}
                <div className="h-90 md:h-130 overflow-hidden">
                    <img
                        src="/header2.jpg"
                        alt=""
                        className="w-full h-full object-cover" />
                </div>

                {/* Bottom-left: image */}
                <div className="h-90 md:h-130 overflow-hidden">
                    <img
                        src="/header2-2.jpg"
                        alt=""
                        className="w-full h-full object-cover" />
                </div>

                {/* Bottom-right: stats grid */}
                <div className="grid grid-cols-2 h-72 md:h-96">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col justify-center px-35 py-6`}
                        >
                            <span className="text-7xl md:text-8xl text-[#9A5634] mb-1">
                                {stat.value}
                            </span>
                            <span className="text-[#050401] text-3xl "
                                style={{ fontFamily: 'Georgia, serif' }}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}