import UsersService from "@/app/services/UsersService";
import { createContext, useContext, useState } from "react";

interface AuthContext{
    hasUser: any,
    handleValidateLogin: (email:string, password:string) => any
}



export const AuthContext = createContext<AuthContext>(null!);


export const AuthProver = ({children} : {children: JSX.Element}) => {

    const [hasUser, setHasUser] = useState();

    async function handleValidateLogin(email: string, password: string){
        const data = {
            email,
            password
        }
        const response = await UsersService.validateLogin(data)
        if(response.status === 200){
            setHasUser(response.data.user)
        }
        return response;
    }

    function handleExecuteLogout(){

    }

    return (
        <AuthContext.Provider value={{hasUser, handleValidateLogin}}>
            {children}
        </AuthContext.Provider>
    )
}