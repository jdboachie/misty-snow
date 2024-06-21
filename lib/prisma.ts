import { PrismaClient } from '@prisma/client/edge'

// not using prisma accelerate any more. testing to see if it's the problem
// import { withAccelerate } from '@prisma/extension-accelerate'

export const prisma = new PrismaClient()
// export const prisma = new PrismaClient().$extends(withAccelerate())