import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')

    try {
        const products = await prisma.product.findMany({
            where: category ? {
                category: {
                    slug: category
                }
            } : {},
            include: {
                category: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        // Parse JSON strings back to arrays
        const formattedProducts = products.map(p => ({
            ...p,
            sizes: JSON.parse(p.sizes || '[]'),
            colors: JSON.parse(p.colors || '[]'),
            images: JSON.parse(p.images || '[]')
        }))

        return NextResponse.json(formattedProducts)
    } catch (error) {
        console.error('Fetch products error:', error)
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
    }
}
