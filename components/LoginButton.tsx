"use client"

import React from "react";
import { useRouter } from "next/navigation";

const LoginButton: React.FC<{ text: string }> = ({ text }) => {
    const router = useRouter();
    return <button onClick={() => {
        router.push('/login');
    }} type="button" className="text-white w-[8rem] bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full  px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{text}</button>
}

export default LoginButton;