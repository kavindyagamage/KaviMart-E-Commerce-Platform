"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useStore } from "@/store/useStore"

export function CartSheet() {
    const [isOpen, setIsOpen] = useState(false)
    const { items, removeFromCart, updateQuantity } = useStore()

    const itemCount = items.reduce((acc, item) => acc + (item.quantity || 1), 0)
    const subtotal = items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0)

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button className="p-2 hover:text-[#7C3AED] transition-colors flex flex-col items-center relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="text-[10px] hidden lg:block mt-1">Cart</span>
                    {itemCount > 0 && (
                        <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#D32F2F] text-[10px] text-white flex items-center justify-center font-bold">
                            {itemCount}
                        </span>
                    )}
                </button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md flex flex-col bg-white">
                <SheetHeader className="border-b pb-4">
                    <SheetTitle className="text-xl font-bold uppercase tracking-wide flex items-center justify-between">
                        Your Cart ({itemCount})
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <ShoppingBag className="h-16 w-16 text-gray-200" />
                            <p className="text-lg font-medium text-gray-500">Your cart is empty</p>
                            <Button
                                onClick={() => setIsOpen(false)}
                                className="bg-[#0F172A] hover:bg-[#7C3AED] text-white"
                            >
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {items.map((item, idx) => (
                                <div key={`${item.id}-${item.selectedSize}-${idx}`} className="flex gap-4 border-b pb-4">
                                    <div className="relative w-20 h-24 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col pt-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-semibold text-sm line-clamp-2 text-[#0F172A] pr-4">{item.name}</h4>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-[#D32F2F] transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="flex gap-2 mt-1">
                                            {item.selectedSize && <p className="text-xs text-gray-500">Size: {item.selectedSize}</p>}
                                            {item.selectedColor && <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>}
                                        </div>

                                        <div className="mt-auto flex items-center justify-between">
                                            <div className="flex items-center border rounded-md">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                                                    className="p-1 hover:bg-gray-100"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="px-2 text-xs font-medium">{item.quantity || 1}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                                    className="p-1 hover:bg-gray-100"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                            <span className="font-bold text-[#7C3AED]">LKR {(item.price * (item.quantity || 1)).toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <SheetFooter className="border-t pt-6 flex-col sm:flex-col gap-4">
                        <div className="flex justify-between items-center w-full mb-4">
                            <span className="text-lg font-bold text-gray-600">Subtotal</span>
                            <span className="text-xl font-bold text-[#0F172A]">LKR {subtotal.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-center text-gray-500 mb-4">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <Button asChild className="w-full bg-[#0F172A] hover:bg-[#7C3AED] text-white h-14 text-lg uppercase tracking-widest transition-colors rounded-none">
                            <Link href="/checkout" onClick={() => setIsOpen(false)}>
                                Checkout
                            </Link>
                        </Button>
                    </SheetFooter>
                )}
            </SheetContent>
        </Sheet>
    )
}
