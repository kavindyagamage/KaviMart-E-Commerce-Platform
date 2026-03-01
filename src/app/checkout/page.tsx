"use client"

import { useState } from "react"
import { useStore } from "@/store/useStore"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Truck, ArrowLeft, Loader2 } from "lucide-react"

export default function CheckoutPage() {
    const { items, clearCart } = useStore()
    const subtotal = items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
    const shipping = subtotal > 10000 ? 0 : 500
    const total = subtotal + shipping

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        phone: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handlePlaceOrder = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    email: formData.email,
                    address: formData.address,
                    city: formData.city,
                    postalCode: formData.postalCode,
                }),
            })

            const data = await response.json()

            if (data.url) {
                window.location.href = data.url
            } else {
                alert(data.error || 'Failed to initiate checkout')
                setLoading(false)
            }
        } catch (error) {
            console.error('Checkout error:', error)
            alert('An unexpected error occurred')
            setLoading(false)
        }
    }

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <Link href="/" className="text-[#7C3AED] hover:underline flex items-center justify-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <div className="container mx-auto px-4 pt-8 pb-12">
                <h1 className="text-3xl font-bold text-[#0F172A] mb-8 uppercase tracking-widest">Checkout</h1>

                <form onSubmit={handlePlaceOrder} className="grid lg:grid-cols-3 gap-12">
                    {/* Form Section */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Information */}
                        <section className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider border-b pb-3">Contact Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Shipping Address */}
                        <section className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider border-b pb-3">Shipping Address</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                                    <input
                                        type="text"
                                        name="postalCode"
                                        required
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7C3AED] focus:border-[#7C3AED] p-3 border"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Summary Section */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
                            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider border-b pb-3">Order Summary</h3>

                            <div className="space-y-4 mb-6 max-h-[400px] overflow-auto pr-2">
                                {items.map((item) => (
                                    <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                                        <div className="relative w-16 h-20 bg-gray-100 flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                                            <p className="text-xs text-gray-500">Qty: {item.quantity || 1} • Size: {item.selectedSize || (item.sizes && item.sizes[0])}</p>
                                            <p className="text-sm font-bold text-[#7C3AED]">LKR {item.price.toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 border-t pt-4 text-sm">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>LKR {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>{shipping === 0 ? "FREE" : `LKR ${shipping}`}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold text-[#0F172A] border-t pt-3">
                                    <span>Total</span>
                                    <span>LKR {total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#0F172A] text-white py-4 font-bold uppercase tracking-widest mt-8 hover:bg-[#7C3AED] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    "Complete Order"
                                )}
                            </button>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <ShieldCheck className="w-4 h-4 text-green-600" />
                                    <span>Secure 256-bit SSL encrypted checkout</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <Truck className="w-4 h-4 text-[#7C3AED]" />
                                    <span>Exchanges allowed within 30 days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
