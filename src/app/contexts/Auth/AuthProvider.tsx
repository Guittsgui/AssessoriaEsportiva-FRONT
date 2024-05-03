import { useState } from "react"
import { AuthContext } from "./AuthContext"
import { User } from "@/app/types/IUser";
import UsersService from "@/app/services/UsersService";

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);

    async function signIn(email:string, password:string){
        const data = {
            email,
            password
        }
        const response = await UsersService.validateLogin(data)

        if(response.data.user && response.data.token){
            setUser(response.data.user)
            return true
        }
        return false 
    }

    function signOut(){
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}