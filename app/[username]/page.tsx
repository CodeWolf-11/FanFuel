import React from "react";
import "@/public/man.png";
import Payment from "@/components/Payment";
import Contribution from "@/components/Contribution";
import { getServerActionDispatcher } from "next/dist/client/components/app-router";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/nextAuthOptions";
import { redirect } from "next/navigation";
import { fetchUser } from "../actions/fetchUser";
import UserName from "@/components/UserNameTag";

const Page: React.FC<{ params: { [key: string]: string } }> = async ({ params }) => {

    const session = await getServerSession(nextAuthOptions);

    if (!session) {
        redirect('/login')
    }

    const currentUser = await fetchUser(params.username);

    if (!currentUser) {
        return <div className="w-[full] h-20rem flex text-3xl font-bold justify-center items-center">
            User not found
        </div>
    }
    return <>
        <div className="w-[full]">
            <div className="banner-image relative w-full">
                <img className="object-cover w-full h-full max-h-[20rem]" src={currentUser.cover as string} alt="" />
                <div className="rounded-full absolute -bottom-20 md:-bottom-20 left-1/2 -translate-x-1/2 flex justify-center items-center w-fit">
                    <img className="rounded-full w-[7rem] h-[7rem]" src={currentUser.profile as string} alt="" />
                </div>
            </div>
            <div className="profile-Info text-white mt-24 w-[100%] flex flex-col items-center ">

                <div className="username font-bold text-xl text-white">
                    {`${currentUser.name}`}
                </div>

                {/* <div className="username font-bold text-xl mt-1 text-white">
                    {`@${params.username}`}
                </div> */}

                <UserName username={`${params.username}`} />

                <div className=" text-gray-400 mt-3 font-thin">
                    {`Joined on ${String(currentUser.createdAt.toDateString())}`}
                </div>

                <div className=" text-gray-400 mt-3 mb-3 font-thin text-xl">
                    {currentUser.description}
                </div>

                <div className="text-gray-400  font-thin  text-xl">
                    {"9719 members. 82 posts. $15,240/release"}
                </div>
            </div>

            <div className="w-[90%] mx-auto mt-10 flex flex-col mb-5 gap-2 p-2 items-center sm:flex-row">
                <div className="bg-slate-900 w-full h-[24rem] flex flex-col jusitfy-center items-start overflow-auto overflow-x-hidden rounded-lg sm:w-1/2">
                    <p className="w-full text-center font-bold text-2xl sticky top-0 bg-slate-950 p-2">Supporters</p>
                    <div className="flex flex-col gap-3 w-full justify-center items-start  mt-4 p-3">

                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />
                        <Contribution />


                    </div>
                </div>

                <Payment toAddress={currentUser.publicAddress} />

            </div>
        </div>
    </>
}

export default Page;