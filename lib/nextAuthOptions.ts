import { createUser } from "@/app/actions/createuser";
import { NextAuthOptions } from "next-auth"
import Github from "next-auth/providers/github"

interface GitHubProfile {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    email: string;
    username?: string
    dataBaseId?: string
    // Add other relevant properties from the GitHub profile API response
}

declare module 'next-auth' {
    interface Session {
        user: {
            username?: string;
            email: string;
            image: string
            name: string
            id: string
            // Add other properties as needed
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        username?: string;
        dataBaseId?: string
    }
}


export const nextAuthOptions: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
    pages: {
        signIn: '/login',

    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account?.provider == "github") {
                const githubProfile = profile as GitHubProfile
                const userInDb = await createUser(user.email as string, user.name as string, user.image as string, user.id);
                githubProfile.username = userInDb?.username;
                githubProfile.dataBaseId = userInDb?.id;
            }
            return true;
        },

        async jwt({ token, account, profile }) {

            const githubProfile = profile as GitHubProfile;
            if (account) {
                token.username = githubProfile.username;
                token.dataBaseId = githubProfile.dataBaseId
            }

            return token;
        },

        async session({ session, token, user }) {
            session.user.username = token.username;
            session.user.id = token.dataBaseId as string;
            return session;
        },
    }
}