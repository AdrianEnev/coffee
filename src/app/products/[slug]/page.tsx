"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, Check, Coffee, Globe, Droplets, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/lib/products";
import { Product } from "@/types";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params.slug) {
            const p = getProductBySlug(params.slug as string);
            if (p) {
                setProduct(p);
            }
        }
    }, [params.slug]);

    const handleCheckout = async () => {
        if (!product) return;
        setLoading(true);

        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ productId: product.id }),
            });

            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error("No URL returned", data);
                setLoading(false);
            }
        } catch (error) {
            console.error("Checkout error:", error);
            setLoading(false);
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <p className="text-muted-foreground">Loading product...</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-background/80 backdrop-blur-md">
                <Link href="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Coffee
                </Link>
                <div className="font-serif font-bold text-xl tracking-tight">Misty Valley</div>
                <div className="w-24" /> {/* Spacer for balance */}
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left: Image */}
                <div className="relative h-[50vh] lg:h-screen bg-[#F2EFE9] flex items-center justify-center p-12 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-[500px] aspect-[4/5] shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={product.images ? product.images[0] : "/images/coffee.jpeg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-10 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl" />
                    <div className="absolute bottom-1/2 right-10 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-3xl" />
                </div>

                {/* Right: Details */}
                <div className="h-auto lg:h-screen overflow-y-auto px-6 py-24 lg:p-24 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center space-x-2 text-accent text-sm font-semibold tracking-widest uppercase mb-4">
                            <span>{product.origin.country}</span>
                            <span>•</span>
                            <span>{product.roastLevel} Roast</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6 leading-none">
                            {product.name}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
                            {product.longDescription}
                        </p>

                        <div className="flex items-baseline space-x-4 mb-10">
                            <span className="text-3xl font-medium">${product.price.toFixed(2)}</span>
                            <span className="text-muted-foreground">{product.variant}</span>
                        </div>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-12">
                            <div className="space-y-1">
                                <div className="flex items-center text-primary font-medium mb-1">
                                    <Globe className="w-4 h-4 mr-2 text-accent" />
                                    Region
                                </div>
                                <p className="text-sm text-muted-foreground">{product.origin.region}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center text-primary font-medium mb-1">
                                    <Droplets className="w-4 h-4 mr-2 text-accent" />
                                    Process
                                </div>
                                <p className="text-sm text-muted-foreground">{product.origin.process}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center text-primary font-medium mb-1">
                                    <Coffee className="w-4 h-4 mr-2 text-accent" />
                                    Notes
                                </div>
                                <p className="text-sm text-muted-foreground">{product.tastingNotes.join(", ")}</p>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-center text-primary font-medium mb-1">
                                    <Thermometer className="w-4 h-4 mr-2 text-accent" />
                                    Brew
                                </div>
                                <p className="text-sm text-muted-foreground">{product.brewingParams.method}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                variant="premium"
                                className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-primary/10"
                                onClick={handleCheckout}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Buy Now - Secure Checkout"}
                                {!loading && <ShoppingBag className="ml-2 h-5 w-5" />}
                            </Button>
                        </div>

                        <div className="mt-6 flex items-center text-xs text-muted-foreground">
                            <Check className="w-4 h-4 mr-1 text-green-500" />
                            <span>Free shipping on orders over $50</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
