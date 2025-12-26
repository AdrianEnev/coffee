"use client";

import { Section } from "@/components/layout/section-wrapper";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { Droplets, Thermometer, Timer } from "lucide-react";
import Image from "next/image";

interface DetailsProps {
    product: Product;
}

export function Details({ product }: DetailsProps) {
    return (
        <Section className="bg-canvas-subtle">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="aspect-square bg-white rounded-2xl shadow-xl relative flex items-center justify-center overflow-hidden">
                        <Image
                            src="/images/coffee_brew.jpg"
                            alt="Pour over brewing method"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ideally Brewed</h2>
                        <p className="text-muted-foreground text-lg">
                            To unlock the full potential of {product.name}, we recommend a precision pour-over method.
                            This highlights the delicate floral aromatics that can be lost in immersion brewing.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/50">
                            <Thermometer className="w-6 h-6 text-accent mb-3" />
                            <h4 className="font-serif font-bold text-primary mb-1">Temp</h4>
                            <p className="text-sm text-muted-foreground">{product.brewingParams.temperature}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/50">
                            <Droplets className="w-6 h-6 text-accent mb-3" />
                            <h4 className="font-serif font-bold text-primary mb-1">Ratio</h4>
                            <p className="text-sm text-muted-foreground">{product.brewingParams.ratio}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-muted/50">
                            <Timer className="w-6 h-6 text-accent mb-3" />
                            <h4 className="font-serif font-bold text-primary mb-1">Method</h4>
                            <p className="text-sm text-muted-foreground">{product.brewingParams.method}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Roast Profile</h3>
                        <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-stone-400 to-stone-600 w-[35%]" />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wide">
                            <span>Light</span>
                            <span className="text-primary font-bold">Light-Medium</span>
                            <span>Dark</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
