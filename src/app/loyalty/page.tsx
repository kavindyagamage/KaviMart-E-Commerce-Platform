export const metadata = { title: "KaviMart Loyalty Program" };

const tiers = [
    { tier: "Silver", min: "LKR 0+", perks: ["1 point per LKR 100 spent", "Birthday bonus points", "Early access to sales"], dark: false },
    { tier: "Gold", min: "LKR 50,000+", perks: ["1.5 points per LKR 100", "Free standard shipping", "Exclusive member prices"], dark: false },
    { tier: "Platinum", min: "LKR 150,000+", perks: ["2 points per LKR 100", "Free express shipping", "Personal stylist access", "Invitation-only events"], dark: true },
];

export default function LoyaltyPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">KaviMart Loyalty</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Rewards that keep coming</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                    {tiers.map((t, i) => (
                        <div key={i} className={`rounded-2xl p-6 space-y-3 ${t.dark ? 'bg-[#0F172A] text-white' : 'bg-white shadow-sm'}`}>
                            <div className="text-xs font-bold tracking-widest uppercase text-[#7C3AED]">{t.tier}</div>
                            <div className={`text-sm font-medium ${t.dark ? 'text-gray-300' : 'text-gray-500'}`}>Spend {t.min} per year</div>
                            <ul className="space-y-1">
                                {t.perks.map((p, j) => (
                                    <li key={j} className={`text-sm flex items-center gap-2 ${t.dark ? 'text-gray-200' : 'text-gray-600'}`}>
                                        <span className="text-[#7C3AED]">✓</span> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="bg-white rounded-2xl shadow-sm p-8 text-center space-y-4">
                    <h2 className="text-2xl font-bold text-[#0F172A]">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                        <div><div className="text-4xl mb-2">🛍️</div><strong className="block text-[#0F172A] mb-1">Shop</strong>Earn points on every purchase in-store or online.</div>
                        <div><div className="text-4xl mb-2">⭐</div><strong className="block text-[#0F172A] mb-1">Earn</strong>Accumulate points across all KaviMart channels.</div>
                        <div><div className="text-4xl mb-2">🎁</div><strong className="block text-[#0F172A] mb-1">Redeem</strong>Use 100 points = LKR 100 off your next purchase.</div>
                    </div>
                    <button className="mt-4 bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                        Join Now — It&apos;s Free
                    </button>
                </div>
            </div>
        </div>
    );
}
