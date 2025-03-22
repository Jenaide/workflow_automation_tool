"use client";

import { motion, useInView } from "framer-motion";
import { ChartBarIcon, CogIcon, LightbulbIcon, ShieldCheckIcon } from "lucide-react";
import { useRef } from "react";

const features = [
    {
      name: "Intuitive Design",
      description: "Our user-friendly interface makes it easy to get started and accomplish your goals quickly.",
      icon: LightbulbIcon,
    },
    {
      name: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools that help you make data-driven decisions.",
      icon: ChartBarIcon,
    },
    {
      name: "Customizable Workflows",
      description: "Tailor the platform to your specific needs with customizable workflows and automation.",
      icon: CogIcon,
    },
    {
      name: "Enterprise Security",
      description: "Rest easy knowing your data is protected with our enterprise-grade security features.",
      icon: ShieldCheckIcon,
    },
];

export function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
    };

    return (
        <section className="bg-white py-24" ref={ref}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">Features</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to succeed
                        </p>
                        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                            Our platform provides all the tools you need to streamline your workflow and boost productivity.
                        </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16"
                    >
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => (
                                <motion.div
                                    key={feature.name}
                                    variants={itemVariants}
                                    className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                                >
                                    <div>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                                        <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                </motion.div>
            </div>
        </section>
    )
}