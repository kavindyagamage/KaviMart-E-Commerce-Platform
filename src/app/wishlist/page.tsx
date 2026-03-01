"use client";
import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

export default function WishlistPage() {
    const savedItems = useStore((s) => s.savedItems);
    const toggleWishlist = useStore((s) => s.toggleWishlist);
    const addToCart = useStore((s) => s.addToCart);

    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Wishlist</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">
                        {savedItems.length} {savedItems.length === 1 ? "item" : "items"} saved
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-5xl">
                {savedItems.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                        <Heart className="w-16 h-16 mx-auto mb-4 text-gray-200" />
                        <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-500 text-sm mb-6">Save items you love by clicking the ♥ icon on any product page.</p>
                        <Link href="/" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {savedItems.map((product) => (
                            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden group">
                                <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-100">
                                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    {product.badge && (
                                        <span className="absolute top-3 left-3 bg-[#7C3AED] text-white text-xs font-bold px-2 py-1 rounded">
                                            {product.badge}
                                        </span>
                                    )}
                                </Link>
                                <div className="p-4">
                                    <Link href={`/product/${product.id}`}>
                                        <h3 className="font-bold text-[#0F172A] hover:text-[#7C3AED] transition-colors line-clamp-1">{product.name}</h3>
                                    </Link>
                                    <div className="flex items-baseline gap-2 mt-1 mb-3">
                                        <span className="text-[#7C3AED] font-bold">LKR {product.price.toLocaleString()}</span>
                                        {product.originalPrice && (
                                            <span className="text-gray-400 text-sm line-through">LKR {product.originalPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => addToCart({ ...product, selectedSize: product.sizes?.[0], selectedColor: product.colors?.[0] })}
                                            className="flex-1 bg-[#0F172A] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-[#7C3AED] transition-colors"
                                        >
                                            <ShoppingBag className="w-3 h-3" /> Add to Cart
                                        </button>
                                        <button
                                            onClick={() => toggleWishlist(product)}
                                            className="p-2 border border-red-200 text-red-400 rounded-lg hover:bg-red-50 transition-colors"
                                            title="Remove from wishlist"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
