"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const categories = [
    {
        title: "Men",
        sections: [
            {
                heading: "Topwear",
                items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts"]
            },
            {
                heading: "Bottomwear",
                items: ["Jeans", "Casual Trousers", "Formal Trousers", "Shorts"]
            },
            {
                heading: "Footwear",
                items: ["Casual Shoes", "Formal Shoes", "Sneakers", "Sandals"]
            }
        ]
    },
    {
        title: "Women",
        sections: [
            {
                heading: "Western Wear",
                items: ["Dresses", "Tops", "Jeans", "Trousers"]
            },
            {
                heading: "Ethnic Wear",
                items: ["Sarees", "Kurtas", "Leggings", "Dupattas"]
            },
            {
                heading: "Jewellery",
                items: ["Necklaces", "Earrings", "Rings", "Bracelets"]
            }
        ]
    },
    {
        title: "Kids",
        sections: [
            {
                heading: "Boys",
                items: ["T-Shirts", "Shirts", "Jeans", "Shorts", "Sets"]
            },
            {
                heading: "Girls",
                items: ["Dresses", "Tops", "Skirts", "Leggings", "Sets"]
            }
        ]
    },
    {
        title: "Lifestyle",
        sections: [
            {
                heading: "Home",
                items: ["Bed Sheets", "Towels", "Cushions", "Blankets"]
            },
            {
                heading: "Accessories",
                items: ["Watches", "Sunglasses", "Belts", "Wallets"]
            }
        ]
    }
];

export function MegaMenu() {
    return (
        <NavigationMenu className="max-w-full justify-start z-40">
            <NavigationMenuList className="gap-2">
                {categories.map((category) => (
                    <NavigationMenuItem key={category.title}>
                        <NavigationMenuTrigger className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#7C3AED] bg-transparent hover:bg-transparent">
                            {category.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[800px] p-6 bg-white shadow-xl flex gap-10">
                                {category.sections.map((section) => (
                                    <div key={section.heading} className="flex-1">
                                        <h4 className="font-bold text-[#0F172A] mb-4 border-b pb-2 uppercase text-sm tracking-wide">
                                            {section.heading}
                                        </h4>
                                        <ul className="space-y-2">
                                            {section.items.map((item) => (
                                                <li key={item}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={`/category/${category.title.toLowerCase()}?sub=${item.toLowerCase()}`}
                                                            className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-[#7C3AED] text-gray-600"
                                                        >
                                                            {item}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
