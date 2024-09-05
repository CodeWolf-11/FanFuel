"use client"

import { useConnection, useWallet, WalletContextState } from "@solana/wallet-adapter-react";
import React from "react";
import { SessionProvider, useSession } from "next-auth/react";
import { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { fetchUser } from "@/app/actions/fetchUser";
import { Session } from "next-auth";


async function sendToken(toAddress: string, amount: string, connection: Connection, wallet: WalletContextState) {

    if (toAddress == "null" || toAddress == "") {

    }

    const transaction = new Transaction();

    transaction.add(
        SystemProgram.transfer({
            fromPubkey: wallet.publicKey as PublicKey,
            toPubkey: new PublicKey(toAddress),
            lamports: Number(amount) * LAMPORTS_PER_SOL
        })
    )

    await wallet.sendTransaction(transaction, connection);

}


const Payment: React.FC<{ toAddress: string }> = ({ toAddress }) => {

    const wallet = useWallet();
    const { connection } = useConnection();

    return <>


        <div className="bg-slate-900 w-full h-fit overflow-show rounded-lg sm:w-1/2 p-8">
            <div className="w-full flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
                <h2 className="text-2xl font-bold my-1 ">Make a Payment</h2>
                <WalletMultiButton style={{ position: "relative" }} />
            </div>
            <div className="flex gap-2 flex-col mt-3">

                <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
                <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
                <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
                <button onClick={async () => {
                    await sendToken(toAddress, "1", connection, wallet);
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