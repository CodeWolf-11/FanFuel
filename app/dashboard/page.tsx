import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const Page: React.FC = async () => {

    const session = await getServerSession();

    if (!session) {
        redirect('/login');
    }

    return <>
        Hii this is dashboard
    </>
}

export default Page;