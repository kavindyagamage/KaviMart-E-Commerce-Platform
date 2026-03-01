import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Socials */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-black text-base shadow-md">K</span>
                            <span className="text-2xl font-black tracking-tight">
                                <span className="text-white">Kavi</span><span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Mart</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Sri Lanka's biggest fashion retail chain offering the latest trends and styles for the whole family.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-violet-600 transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-violet-600 transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-violet-600 transition-colors"><Twitter className="w-5 h-5" /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-violet-600 transition-colors"><Youtube className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-violet-400 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-violet-400 transition-colors">Careers</Link></li>
                            <li><Link href="/stores" className="hover:text-violet-400 transition-colors">Store Locator</Link></li>
                            <li><Link href="/contact" className="hover:text-violet-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/loyalty" className="hover:text-violet-400 transition-colors">KaviMart Loyalty</Link></li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Customer Care</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/faq" className="hover:text-violet-400 transition-colors">FAQ</Link></li>
                            <li><Link href="/returns" className="hover:text-violet-400 transition-colors">Return Policy</Link></li>
                            <li><Link href="/shipping" className="hover:text-violet-400 transition-colors">Shipping Info</Link></li>
                            <li><Link href="/track-order" className="hover:text-violet-400 transition-colors">Track Order</Link></li>
                            <li><Link href="/size-guide" className="hover:text-violet-400 transition-colors">Size Guide</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe and get 10% off your first purchase.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/10 border border-white/20 px-4 py-2 w-full rounded-l-md focus:outline-none focus:border-violet-500 text-sm"
                            />
                            <button className="bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-r-md text-sm font-semibold transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} KaviMart. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
