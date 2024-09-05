"use client"

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/nextAuthOptions";
import { fetchUser } from "../actions/fetchUser";
import { signOut, useSession } from "next-auth/react";
import { SubmitToDashBoard } from "../actions/SubmitToDashBoard";

const Page: React.FC = () => {

    const { data: session, update } = useSession();

    if (!session?.user) {
        redirect('/login');
    }


    const [name, setName] = useState("");
    const [description, setDesc] = useState("");
    const [cover, setCover] = useState("");
    const [username, setUsername] = useState("");
    const [profile, setProfile] = useState("");
    const [publicAddress, setAddress] = useState("");
    const [isChanged, setIsChanged] = useState(false);

    useEffect(() => {
        fetchUser(session.user.username as string)
            .then((res) => {
                setName(res?.name as string);
                setDesc(res?.description as string);
                setCover(res?.cover as string);
                setUsername(res?.username as string);
                setProfile(res?.profile as string);
                setAddress(res?.publicAddress as string);
            })
    }, [])

    return <>
        <h1 className="w-full text-center text-3xl font-bold">Dashboard</h1>
        <div className="w-full flex  justify-center mb-7">
            <div className="w-[80%] sm:w-[50%] bg-slate-900 rounded-lg p-4 flex mt-3 flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <input id="name" name="name" type="text" className="p-2 text-black rounded-lg" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setName(e.target.value);
                        setIsChanged(true);
                    }} />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="desc" className="text-sm">Description</label>
                    <input id="desc" name="desc" type="text" className="p-2 text-black rounded-lg" value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setDesc(e.target.value);
                        setIsChanged(true);
                    }} />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bannerImage" className="text-sm">Banner Image</label>
                    <input id="bannerImage" name="cover" type="text" className="p-2 text-black rounded-lg" value={cover} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setCover(e.target.value);
                        setIsChanged(true);
                    }} />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="text-sm">Username</label>
                    <input id="username" name="cover" type="text" className="p-2 text-black rounded-lg" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                        setIsChanged(true);
                    }} />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="profile" className="text-sm">Profile Photo</label>
                    <input id="profile" name="profile" type="text" className="p-2 text-black rounded-lg" value={profile} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setProfile(e.target.value);
                        setIsChanged(true);
                    }} />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="publicAddress" className="text-sm">Solana address</label>
                    <input id="publicAddress" name="address" type="text" className="p-2 text-black rounded-lg" value={publicAddress} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setAddress(e.target.value);
                        setIsChanged(true);
                    }} />
                </div>

                <button onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {

                    await SubmitToDashBoard({
                        name,
                        description,
                        cover,
                        profile,
                        username,
                        publicAddress
                    }, session.user.email);

                    setIsChanged(false);

                    signOut();

                }} type="button" className="text-white  bg-blue-600 hover:bg-blue-800 disabled:opacity-35 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={!isChanged}>Save Changes</button>
            </div>
        </div >
    </>
}

export default Page;