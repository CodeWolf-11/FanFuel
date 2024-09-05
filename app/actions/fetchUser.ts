"use server"
import prisma from "@/lib/db";


export const fetchUser = async (username: string) => {
    try {

        const userInDb = await prisma.user.findFirst({
            where: {
                username: username
            },
            select: {
                username: true,
                email: true,
                publicAddress: true,
                cover: true,
                profile: true,
                createdAt: true,
                updatedAt: true,
                name: true,
                description: true
            }
        });

        if (!userInDb) {
            return null;
        }

        return userInDb


    } catch (e: any) {
        console.log("Error Occurred");
    }

    return null
}

