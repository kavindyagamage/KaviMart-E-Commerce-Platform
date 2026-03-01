import { ProfileSidebar } from "@/components/profile/ProfileSidebar";

export const metadata = { title: "Settings – KaviMart" };

export default function SettingsPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Settings</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Your Preferences</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <ProfileSidebar active="Settings" />
                    <div className="md:col-span-2 space-y-4">
                        {/* Notifications */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                            <h3 className="font-bold text-[#0F172A]">Notifications</h3>
                            {[
                                { label: "Order updates via Email", defaultOn: true },
                                { label: "Order updates via SMS", defaultOn: true },
                                { label: "Promotions & Offers", defaultOn: false },
                                { label: "New arrivals & trends", defaultOn: false },
                            ].map((pref, i) => (
                                <div key={i} className="flex justify-between items-center">
                                    <span className="text-sm text-gray-700">{pref.label}</span>
                                    <div className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${pref.defaultOn ? "bg-[#7C3AED]" : "bg-gray-200"}`}>
                                        <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 shadow transition-transform ${pref.defaultOn ? "translate-x-5" : "translate-x-0.5"}`} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Change Password */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                            <h3 className="font-bold text-[#0F172A]">Change Password</h3>
                            <div>
                                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Current Password</label>
                                <input type="password" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="••••••••" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">New Password</label>
                                <input type="password" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="••••••••" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 font-medium uppercase tracking-wide">Confirm New Password</label>
                                <input type="password" className="mt-1 w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="••••••••" />
                            </div>
                            <button className="bg-[#7C3AED] text-white font-semibold px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors text-sm">Update Password</button>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
                            <h3 className="font-bold text-red-500 mb-2">Danger Zone</h3>
                            <p className="text-sm text-gray-500 mb-4">Deleting your account is permanent and cannot be undone.</p>
                            <button className="border border-red-400 text-red-400 font-semibold px-6 py-2 rounded-lg hover:bg-red-50 transition-colors text-sm">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
