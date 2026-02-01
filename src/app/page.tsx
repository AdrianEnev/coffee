import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Story } from "@/components/sections/story";
import { Details } from "@/components/sections/details";
import { Trust } from "@/components/sections/trust";
import { CTA } from "@/components/sections/cta";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/products";

export default function Home() {
    const products = getAllProducts();
    const featuredProduct = products[0];

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Header />
            <Hero product={featuredProduct} />
            <Philosophy />
            {/* Spacer or visual break could go here */}
            <Story product={featuredProduct} />
            <Details product={featuredProduct} />
            <Trust />
            <CTA product={featuredProduct} />
            <Footer />
        </main>
    );
}
