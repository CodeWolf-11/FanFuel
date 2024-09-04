"use client";

import React, { useState } from "react";
import Fire from "./Logos/Fire";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { useSession, signOut } from "next-auth/react";
import Logout from "./Logos/Logout";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {

    const { data: session } = useSession();
    const [showDropDown, setShowDropDown] = useState(false);
    const currentPath = usePathname();


    return <>
        <nav className="bg-slate-950 text-white flex justify-between items-center px-5 h-[17vh]">
            <Link href={"/"}>
                <div className="logo font-bold text-4xl flex">FanFuel
                    <span>
                        <Fire></Fire>
                    </span>
                </div>
            </Link>


            <div>
                {
                    session ? (
                        <>
                            <button onBlur={() => {
                                setTimeout(() => {
                                    setShowDropDown(false);
                                }, 350)
                            }}
                                id="dropdownDefaultButton" onClick={() => setShowDropDown((prev) => !prev)} data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                Welcome {session.user?.name?.split(" ")[0]}
                                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>

                            <div id="dropdown" className={` ${showDropDown ? "" : "hidden"} z-10 absolute mt-2 divide-y p-2 divide-gray-100 rounded-lg shadow w-44 bg-slate-900`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col gap-2" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <Link href="/dashboard" className={`${(currentPath === "/dashboard") ? "bg-slate-800" : ""} px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center w-full justify-center rounded-lg`}>Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={`${(currentPath === "/") ? "bg-slate-800" : ""} px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center w-full justify-center rounded-lg`}>Home</Link>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut()} className="px-4 py-2 hover:bg-gray-100 mt-2 font-bold  dark:hover:bg-gray-600 dark:hover:text-white w-full flex gap-4 items-center justify-center bg-red-500 rounded-lg">Sign out <Logout /></button>
                                    </li>
                                </ul>
                            </div>

                        </>
                    ) : (
                        <Link href={"/login"}>
                            <LoginButton text="Login" />

                        </Link>
                    )
                }

            </div>


        </nav>
    </>
}

export default Navbar;