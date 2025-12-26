"use client";

import { Section } from "@/components/layout/section-wrapper";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

interface CTAProps {
    product: Product;
}

export function CTA({ product }: CTAProps) {
    return (
        <Section className="bg-background py-32 md:py-40">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 tracking-tight">
                        Experience the <br />
                        <span className="italic text-accent">Misty Valley</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Small batch roasted. Limited availability.
                        Elevate your morning ritual today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button variant="premium" size="lg" className="h-16 px-12 text-lg w-full sm:w-auto">
                            <ShoppingBag className="mr-2" /> Buy on Amazon
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-12 text-lg w-full sm:w-auto">
                            Buy on Etsy
                        </Button>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
