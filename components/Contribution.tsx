import React from "react";
import "@/public/man.png";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


const Contribution: React.FC<{ amount: string, name: string, profile: string, message: string }> = ({ amount, name, profile, message }) => {
    return <div className="flex w-[100%] justify-between items-center bg-red-400 rounded-lg p-3">
        <div className="flex w-full justify-center items-center gap-3">
            <div className="flex w-full ">
                <img className="w-[3rem] h-[3rem] rounded-full self-start" src={profile} alt="" />
                <div className="flex flex-col w-full ml-2">
                    <p className="text-sm flex w-[100%]  items-center justify-between">
                        <span className="font-bold">{name}</span>
                        <span className="text-xl font-bold">{`${Number(amount) / LAMPORTS_PER_SOL} SOL`}</span>
                    </p>
                    <p className="text-xl tracking-tight">{`${message}`}</p>
                </div>
            </div>

        </div >

    </div >
}

export default Contribution;