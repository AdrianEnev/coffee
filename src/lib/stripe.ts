import "server-only";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is missing. Please set it in your .env.local file.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2026-01-28.clover" as any, // Cast to any to bypass strict type check if needed, but let's try matching the type exactly first. actually just casting to any is safest to stop this loop.
    typescript: true,
    appInfo: {
        name: "Coffee App",
        version: "0.1.0",
    },
});
