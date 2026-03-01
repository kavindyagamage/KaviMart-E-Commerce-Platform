export const metadata = { title: "Contact Us – KaviMart" };

export default function ContactPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Contact Us</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">We'd love to hear from you</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
                        <h2 className="text-xl font-bold text-[#0F172A]">Send us a message</h2>
                        <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="Your Name" />
                        <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="Email Address" />
                        <input className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED]" placeholder="Subject" />
                        <textarea rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#7C3AED] resize-none" placeholder="Your message..." />
                        <button className="w-full bg-[#7C3AED] text-white font-semibold py-3 rounded-lg hover:bg-violet-700 transition-colors">Send Message</button>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-8">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-4">Get in Touch</h2>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p>📍 <strong>Head Office:</strong> 123 Galle Road, Colombo 03, Sri Lanka</p>
                                <p>📞 <strong>Phone:</strong> +94 11 234 5678</p>
                                <p>📧 <strong>Email:</strong> support@kavimart.lk</p>
                                <p>⏰ <strong>Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl shadow-sm p-8">
                            <h2 className="text-xl font-bold text-[#0F172A] mb-2">Customer Support</h2>
                            <p className="text-sm text-gray-600">For order-related queries, returns, or general support, our team typically responds within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
