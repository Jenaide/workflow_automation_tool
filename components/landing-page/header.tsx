"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md z-0 opacity-60" : "bg-transparent"
            }`}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0"
                        >
                            <Link href={"/"} className="flex items-center">
                                <motion.span 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 2, y: 0 }}
                                transition={{ duration: 0.5, staggerChildren: 0.2 }}
                                className="text-xl font-bold text-indigo-600">FlowPilot</motion.span>
                            </Link>
                        </motion.div>
                        <div className="hidden md:block">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                                className="ml-10 flex items-center space-x-8 "
                                >
                                    {["Features", "Testimonials", "Pricing", "Contact"].map((item, index) => (
                                        <motion.div
                                            key={item}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Link
                                                href={`#${item.toLowerCase()}`}
                                                className={`text-sm tracking-wider font-extrabold ${
                                                isScrolled ? "text-gray-700 hover:text-indigo-600" : "text-gray-800 hover:text-indigo-500"
                                                }`}
                                            >
                                                {item}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <Link
                                            href="/signup"
                                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                                            >
                                            Get Started
                                        </Link>
                                    </motion.div>
                            </motion.div>
                        </div>
                        <div className="flex md:hidden">
                            <Button
                                variant={"outline"}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden"
                        >
                            <div className="space-y-1 bg-white px-2 pb-3 pt-2 shadow-lg">
                                {["Features", "Testimonials", "Pricing", "Contact"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Link
                                    href="#"
                                    className="mt-4 block w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-indigo-700"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
        </header>
    )
}