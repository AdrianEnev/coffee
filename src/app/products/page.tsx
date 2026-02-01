"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/lib/products";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ShopPage() {
    const products = getAllProducts();

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />

            {/* Shop Header */}
            <section className="pt-32 pb-16 px-6 md:px-12 bg-[#F2EFE9]/30">
                <div className="container mx-auto text-center max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                        Our Collection
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Explore our carefully curated selection of beans, grounds, and pods.
                        Each blend tells a story of origin, craft, and passion.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-20 px-6 md:px-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            {/* Card Image */}
                            <Link href={`/products/${product.slug}`} className="block relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted/20 mb-6">
                                <Image
                                    src={product.images ? product.images[0] : "/images/coffee.jpeg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                {/* Quick Action */}
                                <div className="absolute bottom-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button size="icon" className="rounded-full h-12 w-12 shadow-lg">
                                        <ArrowRight className="h-5 w-5" />
                                    </Button>
                                </div>
                            </Link>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col">
                                <Link href={`/products/${product.slug}`} className="group-hover:text-accent transition-colors">
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-2 line-clamp-1">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm flex-1">
                                    {product.shortDescription}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.roastLevel} Roast</span>
                                        <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
                                    </div>
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/products/${product.slug}`}>
                                            View Details
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
