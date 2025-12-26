"use client";

import { Section } from "@/components/layout/section-wrapper";
import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <Section className="bg-primary text-primary-foreground relative overflow-hidden">
            {/* Subtle texture or grain could be added here via CSS */}

            <div className="max-w-4xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-sans tracking-widest uppercase text-accent mb-6">The Philosophy</h2>
                    <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
                        "Coffee is not just a routine. <br className="hidden md:block" />
                        It is a quiet rebellion against <br className="hidden md:block" />
                        the rush of the world."
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex justify-center"
                >
                    <div className="w-px h-24 bg-accent/30" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
                >
                    We source only the rarest harvests. We roast with patience.
                    We invite you to slow down and taste the difference that intention makes.
                </motion.p>
            </div>
        </Section>
    );
}
