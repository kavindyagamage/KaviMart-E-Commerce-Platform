"use client";
import { useState } from "react";

export default function TrackOrderPage() {
    const [orderNum, setOrderNum] = useState("");
    const [searched, setSearched] = useState(false);

    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Track Order</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Real-time order updates</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-xl">
                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
                    <h2 className="text-xl font-bold text-[#0F172A]">Enter your order number</h2>
                    <p className="text-gray-500 text-sm">You can find your order number in your confirmation email.</p>
                    <div className="flex gap-2">
                        <input
                            value={orderNum}
                            onChange={e => setOrderNum(e.target.value)}
                            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED]"
                            placeholder="e.g. KM-2026-00123"
                        />
                        <button
                            onClick={() => setSearched(true)}
                            className="bg-[#7C3AED] text-white font-semibold px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors text-sm"
                        >
                            Track
                        </button>
                    </div>
                    {searched && orderNum && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-200">
                            <p className="font-semibold text-[#0F172A] mb-2">Order #{orderNum}</p>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-[#7C3AED] rounded-full"></div>
                                <p>Your order is being processed. You will receive a shipping confirmation soon.</p>
                            </div>
                        </div>
                    )}
                    {searched && !orderNum && (
                        <p className="text-red-500 text-sm">Please enter a valid order number.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
