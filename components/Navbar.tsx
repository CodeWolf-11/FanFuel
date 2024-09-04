"use client";

import React from "react";
import Fire from "./Logos/Fire";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar: React.FC = () => {

    const { data: session } = useSession();

    return <>
        <nav className="bg-slate-950 text-white flex justify-between items-center px-5 h-[17vh]">
            <Link href={"/"}>
                <div className="logo font-bold text-4xl flex">FanFuel
                    <span>
                        <Fire></Fire>
                    </span>
                </div>
            </Link>

            {/* <ul className="flex justify-between gap-4 text-xl">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}


            <div>
                {
                    session ? (
                        <>
                            Signed in as {session.user?.email}
                            <button onClick={() => signOut()}>SignOut</button>
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