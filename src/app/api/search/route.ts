import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
        return NextResponse.json([]);
    }

    try {
        const products = await prisma.product.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { description: { contains: query } },
                ],
            },
            include: {
                category: true,
            },
        });

        const formattedProducts = products.map(p => ({
            ...p,
            id: p.id.toString(),
            sizes: JSON.parse(p.sizes || '[]'),
            colors: JSON.parse(p.colors || '[]'),
            originalPrice: p.originalPrice ?? undefined,
            badge: p.badge ?? undefined,
        }));

        return NextResponse.json(formattedProducts);
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}
