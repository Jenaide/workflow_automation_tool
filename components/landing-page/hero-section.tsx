"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Flow from "@/public/flowscreenshot.png";

export function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-20 sm:py-32">
            <div className="absolute inset-0 z-0">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                        transition={{ duration: 0.5 }}
                        >
                            <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
                                Introducing Our New Product
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
                        >
                            <span className="block">Transform your workflow</span>
                            <span className="block text-indigo-600">with our platform</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 max-w-lg text-lg text-gray-500"
                        >
                            Our innovative solution helps teams collaborate more effectively, streamline processes, and achieve better
                            results in less time.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <Link
                                href="#"
                                className="rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Get started
                            </Link>
                            <Link
                                href="#"
                                className="rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Learn more
                            </Link>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9, rotate: isLoaded ? 0 : -5 }}
                        transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
                        className="relative mx-auto w-full max-w-lg lg:mx-0"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4">
                                <div className="mx-auto h-full w-full rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 opacity-30 blur-lg filter"></div>
                            </div>
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                            <Image
                                src={Flow}
                                alt="Product dashboard"
                                width={800}
                                height={600}
                                className="w-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}