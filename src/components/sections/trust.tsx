"use client";

import { Section } from "@/components/layout/section-wrapper";
import { motion } from "framer-motion";
import { Leaf, Award, HeartHandshake } from "lucide-react";

const VALUES = [
    {
        icon: Leaf,
        title: "Sustainable Harvest",
        description: "Grown in harmony with the local ecosystem, preserving the Gedeo biodiversity."
    },
    {
        icon: HeartHandshake,
        title: "Direct Trade",
        description: "We pay 20% above Fair Trade minimums directly to the Halu Beriti Cooperative."
    },
    {
        icon: Award,
        title: "Master Roasted",
        description: "Roasted in small batches in Brooklyn to maximize sweetness and clarity."
    }
]

export function Trust() {
    return (
        <Section className="bg-primary text-primary-foreground">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Uncompromising Standards</h2>
                <p className="text-white/60 max-w-xl mx-auto">
                    Great coffee shouldn't cost the earth. We are committed to transparency at every step of the chain.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {VALUES.map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6 text-accent">
                            <value.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-serif font-bold mb-3">{value.title}</h3>
                        <p className="text-white/60 leading-relaxed px-4">
                            {value.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
