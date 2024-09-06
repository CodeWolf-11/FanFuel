"use server"
import prisma from "@/lib/db";

export const createUser = async (email: string, name: string, profile: string, username: string) => {
    try {

        let userInDb = await prisma.user.findFirst({
            where: {
                email: email
            },
            select: {
                username: true,
                id: true
            }
        });

        if (userInDb) {
            return userInDb;
        }

        if (!userInDb) {
            userInDb = await prisma.user.create({
                data: {
                    email: email,
                    profile: profile,
                    name: name,
                    username: username,
                    publicAddress: "null",
                    cover: "https://images7.alphacoders.com/133/thumbbig-1337527.webp",
                    description: "Full Stack Developer | Mern Developer"
                },
                select: {
                    username: true,
                    id: true,
                }
            });
            return userInDb;
        }

    } catch (e: any) {
        console.log("Error Occurred in created user");
        console.log(e);
    }
}