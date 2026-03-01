import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { prisma } from '@/lib/prisma'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-01-27-acacia' as any,
})

export async function POST(request: Request) {
    try {
        const { items, email, address, city, postalCode } = await request.json()

        if (!items || items.length === 0) {
            return NextResponse.json({ error: 'No items in cart' }, { status: 400 })
        }

        // Calculate total and prepare line items for Stripe
        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: item.name,
                    images: [item.image],
                },
                unit_amount: Math.round(item.price * 100), // Stripe expects cents/cents equivalent
            },
            quantity: item.quantity || 1,
        }))

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
            customer_email: email,
        })

        // Create Pending Order in Database
        await prisma.order.create({
            data: {
                totalAmount: items.reduce((total: number, item: any) => total + (item.price * (item.quantity || 1)), 0),
                status: 'PENDING',
                stripeSession: session.id,
                address,
                city,
                postalCode,
                orderItems: {
                    create: items.map((item: any) => ({
                        productId: item.id,
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity || 1,
                        size: item.selectedSize || (item.sizes && item.sizes[0]),
                    }))
                }
            }
        })

        return NextResponse.json({ url: session.url })
    } catch (error: any) {
        console.error('Stripe error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
