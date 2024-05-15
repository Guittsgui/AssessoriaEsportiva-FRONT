import UsersService from "@/app/services/UsersService";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions   = {
    providers:[
        Credentials({
            name: 'credentials',
            credentials: {
                email: {label: 'email' , type: 'text'},
                password: {label: 'password', type: 'password'}
            },
            async authorize(credentials, req){
                const data = {
                    email:  credentials?.email as string,
                    password: credentials?.password as string
                }
                const response = await UsersService.validateLogin(data)
                const user = response.data.user
                if(user && response.status === 200){
                    return user
                }
                return null
            } 
        })        
    ],
    pages: {
        signIn: '/Login'
    },
    callbacks: {
        async jwt({ token, user}){
            user && (token.user = user)
            return token
        },
        async session ( session, token){
            session = token.user as any 
            return session
        }
    }
}

const handler = NextAuth(nextAuthOptions)

export {handler as GET, handler as POST, nextAuthOptions}