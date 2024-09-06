import NextAuth from "next-auth/next";
import { nextAuthOptions } from "@/lib/nextAuthOptions";


const authOptions = NextAuth(nextAuthOptions);

export { authOptions as GET, authOptions as POST };