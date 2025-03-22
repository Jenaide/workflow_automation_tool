"use client";

import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import { useRef } from "react";

const plans = [
    {
      name: "Starter",
      price: "R99",
      description: "Perfect for individuals and small teams getting started.",
      features: ["Up to 5 team members", "10 projects", "5GB storage", "Basic analytics", "24/7 support"],
      cta: "Start with Starter",
      popular: false,
    },
    {
      name: "Professional",
      price: "R199",
      description: "Ideal for growing teams that need more power and flexibility.",
      features: [
        "Up to 20 team members",
        "Unlimited projects",
        "50GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom workflows",
      ],
      cta: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "R999",
      description: "For large organizations with complex needs and security requirements.",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Unlimited storage",
        "Custom analytics",
        "Dedicated support",
        "Advanced security",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
]
export function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section className="bg-white py-24" ref={ref}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                    >
                        <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">Pricing</h2>
                        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Plans for teams of all sizes</p>
                        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                            Choose the plan that&apos;s right for you and start improving your workflow today.
                        </p>
                </motion.div>

                <div className="mt-16 grid gap-1.5 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-lg border ${
                            plan.popular ? "border-indigo-500" : "border-gray-200"
                            } bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-500 py-1 text-center text-sm font-medium text-white">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-4xl font-extrabold tracking-tight text-gray-900">{plan.price}</span>
                                    <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>
                                </div>
                                <p className="mt-5 text-gray-500">{plan.description}</p>
                            </div>
                            <ul className="mb-8 space-y-4"> 
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <Check className="h-5 w-5 text-green-500" aria-hidden="true" />
                                        </div>
                                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                            <div>
                            <a
                                href="#"
                                className={`block w-full rounded-md px-4 py-2 text-center text-base font-medium shadow-sm ${
                                    plan.popular
                                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                                    : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                }`}
                                >
                                {plan.cta}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}