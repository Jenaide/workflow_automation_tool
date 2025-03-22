"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CallToAction() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const boxRef = useRef(null);
    const isBoxInView = useInView(boxRef, { once: true, amount: 0.2 });

    return (
        <section className="bg-indigo-700 py-16" ref={ref}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-lg bg-indigo-600 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
                    >
                        <div className="lg:self-center">
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                <span className="block">Ready to get started?</span>
                                <span className="block">Start your free trial today.</span>
                            </h2>
                            <p className="mt-4 text-lg leading-6 text-indigo-200">
                                Sign up for a 14-day free trial and experience the full power of our platform. No credit card required.
                            </p>
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                href="/signup"
                                className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
                            >
                                Get started for free
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        ref={boxRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isBoxInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative items-center justify-center m-34 hidden sm:block "
                    >
                        <div className="relative transform translate-x-6 translate-y-6 rounded-md object-cover sm:translate-x-16 lg:translate-y-20">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="rounded-lg bg-white p-8 shadow-xl">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-medium text-gray-900">No credit card required</h3>
                                        <p className="mt-2 text-gray-500">
                                            Start your free 14-day trial today. Cancel anytime, no questions asked.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}