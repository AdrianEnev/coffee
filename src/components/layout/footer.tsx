import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
                    <div className="md:col-span-1">
                        <h3 className="text-3xl font-serif font-bold mb-4">Kōhī.</h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Experience the ritual of exceptional coffee.
                            Sourced ethically, roasted with passion.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase text-accent">Shop</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="#" className="hover:text-white transition-colors">Single Origin</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blends</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Subscriptions</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Merchandise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase text-accent">Company</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sourcing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-6 text-sm tracking-wider uppercase text-accent">Follow Us</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} Kōhī Coffee Co. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
