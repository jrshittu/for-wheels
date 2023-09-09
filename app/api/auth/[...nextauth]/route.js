import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.Client_ID,
            clientSecret: process.env.Client_secret,
        })
    ],
    async session({ session }){
        const sessionUser = await User.findOne({
            email: session.user.email
        });

        session.user.id = sessionUser._id.toString();

        return session;

    },
    async signIn({ profile }){
        try {
            await connectToDB();

            // check if user exists
            const userExists = await User.findOne({
                email: profile.mail
            });

            // if does'nt exists, create a new user
            if(!userExists){
                await User.create({
                     email: profile.email,
                     username: profile.name.replace(" ", "").toLowerCase(),
                     image: profile.picture
                });
            }

            return true;
        } catch (error) {
            console.log(error);

            return false;
        }
    }
})

export { handler as GET, handler as POST };