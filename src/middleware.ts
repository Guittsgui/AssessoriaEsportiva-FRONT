import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest){
    const token = request.cookies.get('auth_token_triapp')?.value

    const signInURL = new URL('/Login', request.url)
    const dashBoardURL = new URL('/UserHome', request.url)

    if(!token){
        if(request.nextUrl.pathname === '/Login'){
            return NextResponse.next()
        }
        return NextResponse.redirect(signInURL)
    }

    if(request.nextUrl.pathname === '/Login'){
        return NextResponse.redirect(dashBoardURL)
    }

}

export const config = {
    matcher: [
        '/UserHome'
    ]
}