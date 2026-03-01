import { ProfileSidebar } from "@/components/profile/ProfileSidebar";

export const metadata = { title: "My Profile – KaviMart" };

export default function ProfilePage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">My Profile</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Your Account</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <ProfileSidebar active="Personal Info" />
                    <div className="md:col-span-2 space-y-4">
                        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center gap-5">
                            <div className="w-20 h-20 rounded-full bg-[#7C3AED]/20 flex items-center justify-center text-3xl font-bold text-[#7C3AED]">K</div>
                            <div>
                                <h2 className="text-lg font-bold text-[#0F172A]">KaviMart Customer</h2>
                                <p className="text-sm text-gray-500">customer@kavimart.lk</p>
                                <span className="inline-block mt-1 text-xs bg-[#7C3AED]/10 text-[#7C3AED] font-semibold px-3 py-1 rounded-full">Silver Member</span>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                            <h3 className="font-bold text-[#0F172A]">Personal Information</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">First Name</label>
                                    <input defaultValue="KaviMart" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Last Name</label>
                                    <input defaultValue="Customer" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</label>
                                    <input defaultValue="customer@kavimart.lk" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</label>
                                    <input defaultValue="+94 77 123 4567" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" />
                                </div>
                            </div>
                            <button className="bg-[#7C3AED] text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
