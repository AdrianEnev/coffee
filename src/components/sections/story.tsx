"use client";

import { Section } from "@/components/layout/section-wrapper";
import { Product } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface StoryProps {
    product: Product;
}

export function Story({ product }: StoryProps) {
    return (
        <Section id="story" className="bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column: Heading & Context */}
                <div className="lg:col-span-5 sticky top-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Origin Story</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">
                            Born in the <br />
                            {product.origin.region}
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {product.origin.farm} sits at a staggering {product.origin.altitude}.
                            Here, the air is thin, and the cherries ripen slowly, developing complex
                            sugars and distinct floral notes that define the region's character.
                        </p>

                        <div className="bg-canvas-subtle p-8 rounded-lg">
                            <h3 className="font-serif text-xl mb-4">Farm Details</h3>
                            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-muted-foreground/70">Producer</dt>
                                    <dd className="font-medium text-primary mt-1">Smallholders</dd>
                                </div>
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-muted-foreground/70">Variety</dt>
                                    <dd className="font-medium text-primary mt-1">Heirloom</dd>
                                </div>
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-muted-foreground/70">Process</dt>
                                    <dd className="font-medium text-primary mt-1">{product.origin.process}</dd>
                                </div>
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-muted-foreground/70">Harvest</dt>
                                    <dd className="font-medium text-primary mt-1">{product.origin.harvest}</dd>
                                </div>
                            </dl>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Imagery & Narrative (Simulated) */}
                <div className="lg:col-span-7 space-y-12 lg:space-y-24 pt-8 lg:pt-0">
                    {/* Image Block 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden relative shadow-lg">
                            <Image
                                src="/images/coffee_field.jpg"
                                alt="Halu Beriti Cooperative landscape"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                            Mist rolling over the Gedeo hills at dawn.
                        </p>
                    </motion.div>

                    {/* Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-serif mb-6">The Natural Process</h3>
                        <p className="text-muted-foreground leading-loose text-lg">
                            Unlike washed coffees, these cherries are dried with the fruit still intact.
                            This ancient method imbues the bean with the fruit's natural sweetness,
                            resulting in the signature blueberry and jammy notes found in the cup.
                            It is a risky, labor-intensive process that rewards patience with unparalleled depth.
                        </p>
                    </motion.div>

                    {/* Image Block 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="aspect-[4/3] bg-muted/30 rounded-lg overflow-hidden relative shadow-lg">
                            <Image
                                src="/images/coffee_field_2.jpg"
                                alt="Coffee cherries drying on raised beds"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </Section>
    );
}
