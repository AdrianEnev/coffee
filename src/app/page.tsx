import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Story } from "@/components/sections/story";
import { Details } from "@/components/sections/details";
import { Trust } from "@/components/sections/trust";
import { CTA } from "@/components/sections/cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import productData from "@/data/product.json";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <Hero product={productData} />
            <Philosophy />
            {/* Spacer or visual break could go here */}
            <Story product={productData} />
            <Details product={productData} />
            <Trust />
            <CTA product={productData} />
            <Footer />
        </main>
    );
}
