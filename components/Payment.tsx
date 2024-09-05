"use client"

import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const Payment: React.FC = () => {

    const wallet = useWallet();


    return <>
        <ConnectionProvider endpoint={"https://api.devnet.solana.com/"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>

                    <div className="bg-slate-900 w-full h-fit overflow-show rounded-lg sm:w-1/2 p-8">
                        <div className="w-full flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
                            <h2 className="text-2xl font-bold my-1 ">Make a Payment</h2>
                            <WalletMultiButton style={{ position: "relative" }} />
                        </div>
                        <div className="flex gap-2 flex-col mt-3">

                            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" />
                            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" />
                            <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" />
                            <button className="bg-slate-950 text-white p-4 font-bold rounded-lg disabled:bg-gray-500 disabled:opacity-40" >Pay (SOL)</button>

                        </div>


                        <div>
                            <div className="flex gap-2 mt-5">
                                <button className="bg-slate-950 p-3 rounded-lg">0.1 SOL</button>
                                <button className="bg-slate-950 p-3 rounded-lg">0.3 SOL</button>
                                <button className="bg-slate-950 p-3 rounded-lg">1 SOL</button>
                            </div>
                        </div>


                    </div>
                </WalletModalProvider>
            </WalletProvider >
        </ConnectionProvider >
    </>
}

export default Payment;