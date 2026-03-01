"use client"

import Image from "next/image"
import Link from "next/link"
import { Eye, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Product, useStore } from "@/store/useStore"

export function ProductCard({ product }: { product: Product }) {
    const setQuickViewProduct = useStore((state) => state.setQuickViewProduct)
    const addToCart = useStore((state) => state.addToCart)

    return (
        <div className="group relative bg-white border border-gray-100 hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 rounded-lg overflow-hidden">
            {/* Product Image Area */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Link href={`/product/${product.id}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>

                {/* Badge */}
                {product.badge && (
                    <div className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 uppercase tracking-wider text-white rounded-sm ${product.badge === 'Sale' ? 'bg-red-600' : 'bg-violet-600'}`}>
                        {product.badge}
                    </div>
                )}

                {/* Hover Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
                    <Button
                        className="flex-1 bg-white text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart({
                                ...product,
                                selectedSize: product.sizes?.[0],
                                selectedColor: product.colors?.[0]
                            });
                        }}
                    >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                    </Button>
                    <Button
                        size="icon"
                        className="bg-white text-[#0F172A] hover:bg-violet-600 hover:text-white shrink-0"
                        onClick={(e) => {
                            e.preventDefault();
                            setQuickViewProduct(product);
                        }}
                    >
                        <Eye className="w-4 h-4" />
                    </Button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4 text-center">
                <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm text-gray-700 hover:text-violet-600 transition-colors line-clamp-2 md:line-clamp-1 mb-2">
                        {product.name}
                    </h3>
                </Link>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-lg font-bold text-[#0F172A]">
                        LKR {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            LKR {product.originalPrice.toLocaleString()}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
