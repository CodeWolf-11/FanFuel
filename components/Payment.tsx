"use client"

import { useConnection, useWallet, WalletContextState } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import createPayments from "@/app/actions/createPayment";
import { toast } from "react-hot-toast";


async function sendToken(toAddress: string, amount: string, connection: Connection, wallet: WalletContextState, name: string, message: string, toUserId: string, fromUserId: string) {

    if (toAddress == "null" || toAddress == "") {
        toast.error("Invalid public address of solana")
    }

    const transaction = new Transaction();

    transaction.add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey as PublicKey,
            toPubkey: new PublicKey(toAddress),
            lamports: Number(amount) * LAMPORTS_PER_SOL
        })
    )

    const transactionPromise = wallet.sendTransaction(transaction, connection);

    toast.promise(transactionPromise, {
        loading: 'Processing...',
        success: 'Transaction Completed',
        error: "Something went wrong"
    }, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: "#fff"
        }
    });

    await createPayments(Number(amount) * LAMPORTS_PER_SOL, toUserId, fromUserId, message);

}


const Payment: React.FC<{ toAddress: string, toUserId: string }> = ({ toAddress, toUserId }) => {

    const wallet = useWallet();
    const { connection } = useConnection();

    const [name, setName] = useState<string>();
    const [message, setMessage] = useState<string>();
    const [amount, setAmount] = useState<string>();

    const { data: session } = useSession();

    return <>


        <div className="bg-slate-900 w-full h-fit overflow-show rounded-lg sm:w-1/2 p-8">
            <div className="w-full flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
                <h2 className="text-2xl font-bold my-1 ">Make a Payment</h2>
                <WalletMultiButton style={{ position: "relative" }} />
            </div>
            <div className="flex gap-2 flex-col mt-3">

                <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                }} type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />

                <input value={message} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setMessage(e.target.value);
                }} type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />

                <input value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAmount(e.target.value);
                }} type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />

                <button onClick={async () => {

                    if (name === undefined || name === "" || message === undefined || message === "" || amount === undefined || amount === "") {
                        alert("Enter all the details to pay");
                        return;
                    }
                    await sendToken(toAddress, amount, connection, wallet, name, message, toUserId, session?.user.id as string);
                    alert("payment sent");

                }} className="bg-slate-950 text-white p-4 font-bold rounded-lg disabled:bg-gray-500 disabled:opacity-40" >Pay (SOL)</button>

            </div>


            <div>
                <div className="flex gap-2 mt-5">
                    <button className="bg-slate-950 p-3 rounded-lg">0.1 SOL</button>
                    <button className="bg-slate-950 p-3 rounded-lg">0.3 SOL</button>
                    <button className="bg-slate-950 p-3 rounded-lg">1 SOL</button>
                </div>
            </div>


        </div>

    </>
}

export default Payment;