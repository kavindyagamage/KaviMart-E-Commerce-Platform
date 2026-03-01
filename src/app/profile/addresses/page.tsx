import { ProfileSidebar } from "@/components/profile/ProfileSidebar";

export const metadata = { title: "My Addresses – KaviMart" };

export default function AddressesPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Addresses</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Saved Delivery Addresses</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <ProfileSidebar active="Addresses" />
                    <div className="md:col-span-2 space-y-4">
                        {/* Add New Address Button */}
                        <button className="w-full border-2 border-dashed border-[#7C3AED]/40 rounded-2xl p-6 text-[#7C3AED] font-semibold text-sm hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-colors flex items-center justify-center gap-2">
                            <span className="text-xl">+</span> Add New Address
                        </button>

                        {/* Sample Saved Address */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className="text-xs font-bold bg-[#7C3AED]/10 text-[#7C3AED] px-2 py-0.5 rounded-full">Home · Default</span>
                                    <h3 className="font-bold text-[#0F172A] mt-2">KaviMart Customer</h3>
                                    <p className="text-sm text-gray-500 mt-1">123 Sample Road, Colombo 05</p>
                                    <p className="text-sm text-gray-500">Sri Lanka, 00500</p>
                                    <p className="text-sm text-gray-500 mt-1">📞 +94 77 123 4567</p>
                                </div>
                                <div className="flex gap-2 text-xs">
                                    <button className="text-[#7C3AED] font-semibold hover:underline">Edit</button>
                                    <button className="text-red-400 font-semibold hover:underline">Delete</button>
                                </div>
                            </div>
                        </div>

                        {/* Add Address Form */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                            <h3 className="font-bold text-[#0F172A]">Add New Address</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Full Name</label>
                                    <input className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="Enter full name" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</label>
                                    <input className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="+94 77 000 0000" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Address</label>
                                    <input className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="Street address" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">City</label>
                                    <input className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="City" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Postal Code</label>
                                    <input className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="00000" />
                                </div>
                            </div>
                            <button className="bg-[#7C3AED] text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm">Save Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
