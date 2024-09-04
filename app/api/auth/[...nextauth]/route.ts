import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";


export const authOptions = NextAuth({
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
});

export { authOptions as GET, authOptions as POST };