"use server"
import prisma from "@/lib/db"

export const SubmitToDashBoard = async (dataObj: any, email: string) => {


    try {

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                ...dataObj

            }
        });



    } catch (e: any) {
        console.log("Error Occurred");
    }

}

