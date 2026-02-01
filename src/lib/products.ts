import { Product } from "@/types";
import productsData from "@/data/products.json";

export function getAllProducts(): Product[] {
    return productsData;
}

export function getProductBySlug(slug: string): Product | undefined {
    return productsData.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
    return productsData.find((p) => p.id === id);
}
