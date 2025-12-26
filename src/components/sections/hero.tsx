"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
    product: Product;
}

export function Hero({ product }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F2EFE9] rounded-l-[5rem] -z-10 hidden md:block" />
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="order-2 md:order-1"
                >
                    <span className="text-accent font-semibold tracking-widest text-sm uppercase mb-4 block">
                        {product.origin.country} · {product.origin.process}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary leading-[1.1] mb-6">
                        {product.name.split(" ").map((word, i) => (
                            <span key={i} className="block">{word}</span>
                        ))}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
                        {product.longDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="premium" className="group">
                            <ShoppingBag className="mr-2 h-5 w-5" />
                            Buy on Amazon
                        </Button>
                        <Button size="lg" variant="outline" className="group">
                            Read the Story
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8">
                        {product.tastingNotes.map((note) => (
                            <span key={note} className="text-sm font-medium text-foreground/60 border-b border-accent/20 pb-1">
                                {note}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="order-1 md:order-2 relative"
                >
                    <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:max-w-none">
                        {/* Placeholder for Product Image - Replace with generate_image result */}
                        <div className="w-full h-full bg-muted/20 rounded-2xl overflow-hidden relative shadow-2xl">
                            <Image
                                src="/images/coffee.jpeg"
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-[150px]">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Process</p>
                            <p className="font-serif font-semibold text-primary">{product.origin.process}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
