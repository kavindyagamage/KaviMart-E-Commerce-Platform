import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function check() {
    const product = await prisma.product.findUnique({
        where: { slug: 'mens-casual-chinos' }
    })
    console.log(JSON.stringify(product, null, 2))
}

check()
    .catch(console.error)
    .finally(() => prisma.$disconnect())
