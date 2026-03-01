"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ShoppingCart, Check } from "lucide-react"
import { useStore } from "@/store/useStore"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function QuickViewModal() {
    const { quickViewProduct, isQuickViewOpen, setQuickViewProduct, addToCart } = useStore()
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)

    if (!quickViewProduct) return null

    const handleAddToCart = () => {
        addToCart({
            ...quickViewProduct,
            selectedSize: selectedSize || quickViewProduct.sizes?.[0],
            selectedColor: selectedColor || quickViewProduct.colors?.[0]
        })
        setQuickViewProduct(null)
        setSelectedSize(null)
        setSelectedColor(null)
    }

    return (
        <Dialog open={isQuickViewOpen} onOpenChange={(open) => {
            if (!open) {
                setQuickViewProduct(null)
                setSelectedSize(null)
                setSelectedColor(null)
            }
        }}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white gap-0 border-none shadow-2xl">
                <DialogTitle className="sr-only">Quick View: {quickViewProduct.name}</DialogTitle>
                <DialogDescription className="sr-only">Details for {quickViewProduct.name}</DialogDescription>
                <div className="grid md:grid-cols-2">
                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-gray-100">
                        <Image
                            src={quickViewProduct.image}
                            alt={quickViewProduct.name}
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Details */}
                    <div className="p-8 md:p-12 flex flex-col">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#0F172A] mb-4 tracking-tight">{quickViewProduct.name}</h2>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-3xl font-bold text-[#7C3AED]">
                                    LKR {quickViewProduct.price.toLocaleString()}
                                </span>
                                {quickViewProduct.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through">
                                        LKR {quickViewProduct.originalPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Experience premium quality with this exquisite piece. Designed for comfort and styled for the modern trendsetter.
                            </p>
                        </div>

                        <div className="space-y-8 mb-10 flex-1">
                            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h4 className="font-bold text-sm uppercase tracking-wider">Select Size</h4>
                                        {selectedSize && <span className="text-xs text-[#7C3AED] font-medium">Selected: {selectedSize}</span>}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {quickViewProduct.sizes.map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`w-12 h-12 border transition-all duration-200 rounded-sm flex items-center justify-center text-sm font-bold ${selectedSize === size
                                                        ? 'border-[#0F172A] bg-[#0F172A] text-white'
                                                        : 'border-gray-200 text-gray-600 hover:border-[#7C3AED] hover:text-[#7C3AED]'
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                                <div>
                                    <h4 className="font-bold text-sm uppercase tracking-wider mb-3">Select Color</h4>
                                    <div className="flex gap-3">
                                        {quickViewProduct.colors.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-8 h-8 rounded-full border-2 transition-all relative ${selectedColor === color
                                                        ? 'border-[#0F172A] scale-110'
                                                        : 'border-transparent hover:scale-105'
                                                    }`}
                                                style={{ backgroundColor: color.toLowerCase() }}
                                                title={color}
                                            >
                                                {selectedColor === color && (
                                                    <Check className="w-4 h-4 text-white absolute inset-0 m-auto mix-blend-difference" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <Button
                                size="lg"
                                className="flex-1 bg-[#0F172A] hover:bg-[#7C3AED] text-white transition-all duration-300 h-16 uppercase tracking-widest font-black text-sm"
                                onClick={handleAddToCart}
                            >
                                <ShoppingCart className="w-5 h-5 mr-3" />
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
