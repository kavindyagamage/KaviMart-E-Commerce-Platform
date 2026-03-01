import { ProfileSidebar } from "@/components/profile/ProfileSidebar";
import Link from "next/link";

export const metadata = { title: "My Orders – KaviMart" };

export default function OrdersPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">My Orders</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Your Order History</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <ProfileSidebar active="My Orders" />
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                            <div className="text-6xl mb-4">📦</div>
                            <h2 className="text-xl font-bold text-[#0F172A] mb-2">No orders yet</h2>
                            <p className="text-gray-500 text-sm mb-6">Once you place an order, you can track and manage it here.</p>
                            <Link href="/" className="inline-block bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors">
                                Start Shopping
                            </Link>
                        </div>
                        {/* Order filters - ready for when orders exist */}
                        <div className="mt-4 flex gap-2">
                            {["All", "Processing", "Shipped", "Delivered", "Cancelled"].map((tab) => (
                                <span key={tab} className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${tab === "All" ? "bg-[#7C3AED] text-white" : "bg-white border text-gray-500 hover:border-[#7C3AED]"}`}>{tab}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
