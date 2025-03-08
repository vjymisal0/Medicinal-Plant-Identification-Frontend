'use client';

import React, { useRef } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

export const StickyScroll = ({
    content,
}: {
    content: {
        title: string;
        description: string;
        thumbnail: string;
    }[];
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ['start start', 'end start'],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpoint = cardsBreakpoints.reduce((prev, curr) => {
            return Math.abs(curr - latest) < Math.abs(prev - latest) ? curr : prev;
        });
        setActiveCard(cardsBreakpoints.indexOf(closestBreakpoint));
    });

    return (
        <motion.div
            className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title} className="my-20">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-slate-300 max-w-sm mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <motion.div
                className="hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden"
                style={{
                    backgroundImage: `url(${content[activeCard].thumbnail})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </motion.div>
    );
};