export const metadata = { title: "Terms of Service – KaviMart" };

const sections = [
    { title: "1. Acceptance of Terms", body: "By accessing and using the KaviMart website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services." },
    { title: "2. Use of Our Services", body: "You must be at least 18 years old to make purchases on KaviMart, or have parental consent. You agree to provide accurate information when creating an account or placing an order." },
    { title: "3. Product Availability", body: "We strive to keep our inventory accurate. In the rare case an item becomes unavailable after purchase, we will notify you and offer a full refund or suitable alternative." },
    { title: "4. Pricing", body: "All prices are in Sri Lankan Rupees (LKR) and include applicable taxes unless stated otherwise. We reserve the right to change prices at any time without prior notice." },
    { title: "5. Intellectual Property", body: "All content on this website, including logos, images, and text, is the property of KaviMart and is protected by copyright law. Unauthorised use is strictly prohibited." },
    { title: "6. Limitation of Liability", body: "KaviMart shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products beyond the amount paid for the order." },
    { title: "7. Governing Law", body: "These terms are governed by the laws of Sri Lanka. Any disputes shall be resolved in the courts of Colombo, Sri Lanka." },
];

export default function TermsPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Terms of Service</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Last updated: March 2026</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-3xl space-y-4">
                {sections.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                        <h3 className="font-bold text-[#0F172A] mb-2">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
