export const metadata = { title: "Privacy Policy – KaviMart" };

const sections = [
    { title: "Information We Collect", body: "We collect personal information such as your name, email address, shipping address, and payment details when you place an order. We also collect browsing data through cookies to improve your shopping experience." },
    { title: "How We Use Your Information", body: "Your information is used to process orders, send shipping updates, provide customer support, and improve our services. We do not sell your personal data to third parties." },
    { title: "Data Security", body: "All sensitive data is encrypted using SSL/TLS technology. We use industry-standard security measures to protect your information from unauthorized access." },
    { title: "Cookies", body: "We use cookies to remember your preferences and provide a personalised experience. You can disable cookies in your browser settings, though this may affect some functionality." },
    { title: "Third-Party Services", body: "We use trusted third-party services for payment processing (Stripe) and delivery. These partners are bound by their own privacy policies and data protection agreements." },
    { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data. To make a request, please contact us at privacy@kavimart.lk." },
];

export default function PrivacyPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Privacy Policy</h1>
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
