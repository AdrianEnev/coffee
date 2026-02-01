"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#F2EFE9] p-6">
            <div className="bg-white/80 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>

                <h1 className="text-3xl font-serif font-bold text-primary mb-4">Order Confirmed!</h1>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Thank you for your purchase. We've sent a confirmation email with your order details.
                </p>

                <div className="space-y-3">
                    <Button asChild className="w-full h-12 text-lg">
                        <Link href="/">Back to Shop</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
