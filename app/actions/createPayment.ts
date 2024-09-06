"use server"

import prisma from "@/lib/db";

const createPayments = async (amount_in_lamport: number, to_user_ID: string, from_user_ID: string, message: string) => {
    try {

        const paymentInDb = await prisma.payment.create({
            data: {
                amount: String(amount_in_lamport),
                toUserId: to_user_ID,
                initiatorId: from_user_ID,
                message: message,
                done: true
            },
            select: {
                message: true,
                receiver: {
                    select: {
                        name: true,
                        username: true,
                        email: true,
                        id: true
                    }
                },
                amount: true,
                initiator: {
                    select: {
                        name: true,
                        username: true,
                        email: true,
                        id: true
                    }
                },
                toUserId: true,
                initiatorId: true,
                id: true
            }
        });

        return paymentInDb;


    } catch (e: any) {
        console.log("Error occurred");
    }

    return null;
}

export default createPayments;