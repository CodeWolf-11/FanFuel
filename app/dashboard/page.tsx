import React from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const Page: React.FC = async () => {

    const session = await getServerSession();

    if (!session) {
        redirect('/login');
    }

    return <>
        <h1 className="w-full text-center text-3xl font-bold">Dashboard</h1>
        <div className="w-full flex  justify-center mb-7">
            <div className="w-[80%] sm:w-[50%] bg-slate-900 rounded-lg p-4 flex mt-3 flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm">Name</label>
                    <input id="name" type="text" className="p-2 text-black rounded-lg" />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="desc" className="text-sm">Description</label>
                    <input id="desc" type="text" className="p-2 text-black rounded-lg" />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="bannerImage" className="text-sm">Banner Image</label>
                    <input id="bannerImage" type="text" className="p-2 text-black rounded-lg" />

                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="profile" className="text-sm">Profile Photo</label>
                    <input id="profile" type="text" className="p-2 text-black rounded-lg" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="publicAddress" className="text-sm">Solana address</label>
                    <input id="publicAddress" type="text" className="p-2 text-black rounded-lg" />
                </div>

                <button type="button" className="text-white  bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Changes</button>
            </div>
        </div>
    </>
}

export default Page;