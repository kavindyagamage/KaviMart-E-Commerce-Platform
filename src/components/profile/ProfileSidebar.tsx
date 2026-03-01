import Link from "next/link";

const sidebarLinks = [
    { label: "Personal Info", href: "/profile" },
    { label: "My Orders", href: "/profile/orders" },
    { label: "Addresses", href: "/profile/addresses" },
    { label: "Wishlist", href: "/wishlist" },
    { label: "Settings", href: "/profile/settings" },
];

export function ProfileSidebar({ active }: { active: string }) {
    return (
        <div className="space-y-2">
            {sidebarLinks.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${active === item.label
                            ? "bg-[#7C3AED] text-white"
                            : "bg-white hover:bg-gray-50 text-gray-700"
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
