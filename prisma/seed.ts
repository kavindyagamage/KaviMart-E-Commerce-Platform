import * as dotenv from 'dotenv'
import * as path from 'path'
import { PrismaClient } from '@prisma/client'

dotenv.config({ path: path.join(__dirname, '../.env') })

const prisma = new PrismaClient()

const categories = [
    { name: 'Men', slug: 'men' },
    { name: 'Women', slug: 'women' },
    { name: 'Kids', slug: 'kids' },
    { name: 'Lifestyle', slug: 'lifestyle' },
]

interface SeedProduct {
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    image: string;
    badge?: string;
    sizes?: string;
    categoryName: string;
    subCategory?: string;
}

const products: SeedProduct[] = [
    // Men
    {
        name: "Premium Cotton T-Shirt",
        slug: "premium-cotton-t-shirt",
        price: 2500,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        badge: "New",
        sizes: JSON.stringify(["S", "M", "L", "XL"]),
        categoryName: 'Men',
        subCategory: 't-shirts'
    },
    {
        name: "Classic Denim Jacket",
        slug: "classic-denim-jacket",
        price: 8500,
        originalPrice: 10500,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop",
        badge: "Sale",
        sizes: JSON.stringify(["S", "M", "L", "XL"]),
        categoryName: 'Men',
        subCategory: 'topwear'
    },
    {
        name: "Men's Casual Chinos",
        slug: "mens-casual-chinos",
        price: 4800,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
        sizes: JSON.stringify(["30", "32", "34", "36"]),
        categoryName: 'Men',
        subCategory: 'casual trousers'
    },
    {
        name: "Indigo Slim Fit Jeans",
        slug: "indigo-slim-fit-jeans",
        price: 5500,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
        sizes: JSON.stringify(["30", "32", "34", "36"]),
        categoryName: 'Men',
        subCategory: 'jeans'
    },

    // Women
    {
        name: "Cotton Summer Dress",
        slug: "cotton-summer-dress",
        price: 5200,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        badge: "New",
        sizes: JSON.stringify(["XS", "S", "M", "L"]),
        categoryName: 'Women',
        subCategory: 'dresses'
    },
    {
        name: "Floral Boho Blouse",
        slug: "floral-boho-blouse",
        price: 3600,
        originalPrice: 4200,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
        badge: "Sale",
        sizes: JSON.stringify(["S", "M", "L"]),
        categoryName: 'Women',
        subCategory: 'tops'
    },
    {
        name: "Elegant Silk Saree",
        slug: "elegant-silk-saree",
        price: 12500,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
        categoryName: 'Women',
        subCategory: 'sarees'
    },

    // Kids
    {
        name: "Kids Cotton T-Shirt",
        slug: "kids-cotton-t-shirt",
        price: 1500,
        image: "https://images.unsplash.com/photo-1519702209724-42f0a0d9e9e1?q=80&w=800&auto=format&fit=crop",
        badge: "New",
        sizes: JSON.stringify(["2T", "3T", "4T", "5T"]),
        categoryName: 'Kids',
        subCategory: 'topwear'
    },
    {
        name: "Denim Kids Overalls",
        slug: "denim-kids-overalls",
        price: 3200,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=800&auto=format&fit=crop",
        sizes: JSON.stringify(["S", "M", "L"]),
        categoryName: 'Kids',
        subCategory: 'sets'
    },

    // Lifestyle
    {
        name: "Minimalist Table Lamp",
        slug: "minimalist-table-lamp",
        price: 4500,
        originalPrice: 5500,
        image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=800&auto=format&fit=crop",
        badge: "Sale",
        categoryName: 'Lifestyle',
        subCategory: 'home'
    },
    {
        name: "Aromatic Soul Candle",
        slug: "aromatic-soul-candle",
        price: 2400,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop",
        categoryName: 'Lifestyle',
        subCategory: 'home'
    },
    {
        name: "Classic Chronograph Watch",
        slug: "classic-chronograph-watch",
        price: 15800,
        image: "https://unsplash.com/photos/silver-link-bracelet-round-chronograph-watch--KRN2kU9e1s",
        categoryName: 'Lifestyle',
        subCategory: 'watches'
    }
]

async function main() {
    console.log('Start seeding...')

    // Optional: Clear existing products to avoid stale data (CARE: deletes all products)
    await prisma.product.deleteMany({})
    console.log('Cleaned up existing products.')

    // Create Categories
    for (const cat of categories) {
        await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {},
            create: cat,
        })
    }

    // Get all categories to link products
    const dbCategories = await prisma.category.findMany()

    // Create Products
    for (const product of products) {
        const category = dbCategories.find(c => c.name === product.categoryName)
        if (!category) continue

        const { categoryName, ...productData } = product
        await prisma.product.upsert({
            where: { slug: product.slug },
            update: {
                name: productData.name,
                price: productData.price,
                originalPrice: productData.originalPrice,
                image: productData.image,
                badge: productData.badge,
                sizes: productData.sizes,
                subCategory: productData.subCategory,
                categoryId: category.id
            },
            create: {
                ...productData,
                categoryId: category.id
            }
        })
    }

    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
