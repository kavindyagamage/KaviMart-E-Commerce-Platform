"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, Star, Share2, Heart, ShieldCheck, Truck, RotateCcw, Check } from "lucide-react"
import { type Product, useStore } from "@/store/useStore"
import { Button } from "@/components/ui/button"

export default function ProductDetailClient({ product }: { product: Product }) {
    const addToCart = useStore((state) => state.addToCart)
    const toggleWishlist = useStore((state) => state.toggleWishlist)
    const isWishlisted = useStore((state) => state.isWishlisted)
    const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes?.[0] || null)
    const [selectedColor, setSelectedColor] = useState<string | null>(product.colors?.[0] || null)
    const [shareMsg, setShareMsg] = useState("")
    const [wishlistAnim, setWishlistAnim] = useState(false)

    const wishlisted = isWishlisted(product.id)

    const handleAddToCart = () => {
        addToCart({
            ...product,
            selectedSize: selectedSize || undefined,
            selectedColor: selectedColor || undefined
        })
    }

    const handleWishlist = () => {
        toggleWishlist(product)
        setWishlistAnim(true)
        setTimeout(() => setWishlistAnim(false), 500)
    }

    const handleShare = async () => {
        const url = window.location.href
        if (navigator.share) {
            try {
                await navigator.share({ title: product.name, text: `Check out ${product.name} on KaviMart!`, url })
            } catch {
                // user cancelled
            }
        } else {
            await navigator.clipboard.writeText(url)
            setShareMsg("Link copied!")
            setTimeout(() => setShareMsg(""), 2000)
        }
    }

    return (
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Images Gallery */}
            <div className="flex flex-col gap-4">
                <div className="relative aspect-[3/4] bg-gray-100 w-full overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover" priority />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(idx => (
                        <div key={idx} className="relative aspect-square bg-gray-200 cursor-pointer overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                            <Image src={product.image} alt={`${product.name} Thumbnail ${idx}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
                <div className="mb-8 border-b pb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
                        {product.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                        <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span>(128 Reviews)</span>
                        <span className="text-green-600 font-semibold">• In Stock</span>
                    </div>

                    <div className="flex items-baseline gap-4">
                        <span className="text-4xl font-bold text-[#7C3AED]">
                            LKR {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                            <span className="text-xl text-gray-400 line-through">
                                LKR {product.originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>
                    <p className="text-sm mt-2 text-gray-500">Taxes included. <span className="underline cursor-pointer">Shipping</span> calculated at checkout.</p>
                </div>

                <div className="space-y-8 mb-10">
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="font-bold uppercase tracking-wider text-xs">Size</h3>
                                <span className="text-xs underline text-gray-500 cursor-pointer hover:text-[#7C3AED]">Size Guide</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`h-12 w-14 border flex items-center justify-center font-bold transition-all ${selectedSize === size
                                            ? 'border-[#0F172A] bg-[#0F172A] text-white'
                                            : 'border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.colors && product.colors.length > 0 && (
                        <div>
                            <h3 className="font-bold uppercase tracking-wider text-xs mb-3">Color</h3>
                            <div className="flex gap-4">
                                {product.colors.map(color => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all relative ${selectedColor === color
                                            ? 'border-[#0F172A] scale-110'
                                            : 'border-transparent hover:scale-105'
                                            }`}
                                        style={{ backgroundColor: color.toLowerCase() }}
                                        title={color}
                                    >
                                        {selectedColor === color && (
                                            <Check className="w-5 h-5 text-white absolute inset-0 m-auto mix-blend-difference" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex gap-4 mb-8">
                    <Button
                        size="lg"
                        onClick={handleAddToCart}
                        className="flex-1 bg-[#0F172A] hover:bg-[#7C3AED] text-white h-16 font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 text-sm"
                    >
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                    </Button>

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                        className={`h-16 w-16 flex items-center justify-center border-2 transition-all duration-200 shrink-0
                            ${wishlisted
                                ? 'border-red-400 bg-red-50 text-red-500'
                                : 'border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED]'}
                            ${wishlistAnim ? 'scale-125' : 'scale-100'}`}
                    >
                        <Heart className={`w-5 h-5 transition-all ${wishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Share Button */}
                    <div className="relative">
                        <button
                            onClick={handleShare}
                            title="Share this product"
                            className="h-16 w-16 flex items-center justify-center border-2 border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors shrink-0"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                        {shareMsg && (
                            <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow">
                                {shareMsg}
                            </span>
                        )}
                    </div>
                </div>

                <div className="bg-gray-50 border p-8 space-y-6 text-sm text-gray-600 rounded-lg">
                    <div className="flex items-center gap-4">
                        <ShieldCheck className="w-6 h-6 text-[#7C3AED]" />
                        <div>
                            <p className="font-bold text-gray-900">1 Year Premium Guarantee</p>
                            <p className="text-xs">Original product warranty included</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Truck className="w-6 h-6 text-[#7C3AED]" />
                        <div>
                            <p className="font-bold text-gray-900">Island-wide Shipping</p>
                            <p className="text-xs">Free delivery for orders above LKR 10,000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <RotateCcw className="w-6 h-6 text-[#7C3AED]" />
                        <div>
                            <p className="font-bold text-gray-900">30 Days Return Policy</p>
                            <p className="text-xs">Easy exchanges and returns at any outlet</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
