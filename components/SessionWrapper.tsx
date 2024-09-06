"use client"

import { SessionProvider } from "next-auth/react";
import React from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';


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