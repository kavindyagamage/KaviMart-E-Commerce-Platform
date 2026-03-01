export const metadata = { title: "Careers – KaviMart" };

const roles = [
    { title: "Retail Store Manager", location: "Colombo 03", type: "Full-Time" },
    { title: "Visual Merchandiser", location: "Kandy", type: "Full-Time" },
    { title: "E-Commerce Executive", location: "Remote", type: "Full-Time" },
    { title: "Fashion Stylist / Consultant", location: "Nugegoda", type: "Part-Time" },
    { title: "Customer Care Specialist", location: "Colombo 07", type: "Full-Time" },
    { title: "Warehouse Associate", location: "Kelaniya", type: "Full-Time" },
];

export default function CareersPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Careers</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Join the KaviMart family</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl space-y-8">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Why Work With Us?</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">At KaviMart, we believe our people are our greatest asset. We offer competitive salaries, a vibrant culture, staff discounts, and real growth opportunities. Join a team that&apos;s passionate about fashion and committed to making a difference.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Open Positions</h2>
                    <div className="space-y-4">
                        {roles.map((role, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center gap-4 flex-wrap">
                                <div>
                                    <h3 className="font-bold text-[#0F172A]">{role.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">📍 {role.location} · {role.type}</p>
                                </div>
                                <button className="bg-[#7C3AED] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-violet-700 transition-colors">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
