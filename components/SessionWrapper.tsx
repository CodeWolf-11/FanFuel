"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";
import { useConnection, useWallet, WalletContextState } from "@solana/wallet-adapter-react";
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

const SessionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <SessionProvider>
        <ConnectionProvider endpoint={"https://api.devnet.solana.com/"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>

                    {children}
                </WalletModalProvider>
            </WalletProvider >
        </ConnectionProvider >
    </SessionProvider>
}



export default SessionWrapper;