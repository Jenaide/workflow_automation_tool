"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
    {
      content:
        "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
      author: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "The intuitive interface and powerful features make this the best solution we've used. It's been a game-changer for our business.",
      author: "Michael Chen",
      role: "CTO at StartupX",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "I was skeptical at first, but after seeing the results, I'm convinced. Our team is more aligned and efficient than ever before.",
      author: "Emily Rodriguez",
      role: "Operations Director at GrowthCo",
      image: "/placeholder.svg?height=100&width=100",
    },
]
export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="bg-indigo-50 py-24" ref={ref}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
                >
                    <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Trusted by teams worldwide</p>
                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Don&apos;t just take our word for it — hear what our clients have to say.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative rounded-lg bg-white p-6 shadow-md"
                      >
                        <div className="relative z-10">
                            <div className="mb-6 text-lg font-medium text-gray-600">
                                {testimonial.content}
                            </div>
                            <div className="flex items-center">
                                <div className="h-12 w-12 overflow-hidden rounded-full">
                                <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    width={100}
                                    height={100}
                                    className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-base font-medium text-gray-900">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                            className="absolute right-4 top-4 text-4xl font-bold text-indigo-200"
                        >&quot;</motion.div>
                      </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}