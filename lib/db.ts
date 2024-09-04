import { PrismaClient } from "@prisma/client";

const prismaCLientSignleton = () => {
    return new PrismaClient()
}

declare const globalThis: {
    prisma: ReturnType<typeof prismaCLientSignleton>;
} & typeof global

const prisma = globalThis.prisma ?? prismaCLientSignleton();


export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma