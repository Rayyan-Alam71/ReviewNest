import { prisma } from "@/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { OAuthConfig } from "next-auth/providers/oauth";

// interface AuthOption  {
//     adapter: Adapter;
//     session: {
//         strategy: string;
//     };
//     providers: OAuthConfig<GoogleProfile>[];
//     secret: string;
//     callbacks: {
//         jwt({ token, user }: any): Promise<{
//             id: string;
//             name: string | null;
//             email: string;
//             picture: string | null;
//         }>;
//         session({ token, session }: any): Promise<any>;
//     };
// }

export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
    // ...add more providers here
],
secret : process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    async jwt({ token, user } : any) {
            const dbUser = await prisma.user.findFirst({
                where : {
                    email : token.email
                } 
            });
    
            if (!dbUser) {
                throw new Error("no user with email found");
            }
    
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            };
    },
    async session({ token, session } : any) {
            if (token) {
                session.user = {
                    id: token.id as string,
                    name: token.name,
                    email: token.email,
                    image: token.picture,
                };
            }
    
            return session;
        },
    },
    
}
// @ts-ignore
export default NextAuth(authOptions)