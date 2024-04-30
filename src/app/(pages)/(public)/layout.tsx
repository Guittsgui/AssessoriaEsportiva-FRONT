import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type props = {
    children: ReactNode
}

export default async function PrivateLayout({children}: props){

    const session = await getServerSession(nextAuthOptions)

    if(session){
        redirect('/UserHome')
    }

    return <>
        {children}
    </>
}