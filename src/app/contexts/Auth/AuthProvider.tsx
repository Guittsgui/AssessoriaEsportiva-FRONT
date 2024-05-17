import UsersService from "@/app/services/UsersService";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

interface AuthContext{
    hasUser: ReturnedUser | null,
    handleValidateLogin: (email:string, password:string) => any
    handleExecuteLogout: () => void;
}

interface ReturnedUser{
    id: number,
    name: string,
    email: string,
    role: string
}


export const AuthContext = createContext<AuthContext>(null!);


export const AuthProver = ({children} : {children: JSX.Element}) => {

    const [hasUser, setHasUser] = useState(null);

    async function handleValidateLogin(email: string, password: string){
        const data = {
            email,
            password
        }
        const response = await UsersService.validateLogin(data)
        const {user, tokenJwt} = response.data
        if(response.status === 200 && user && tokenJwt){
            setHasUser(user)
            Cookies.set('auth_token_triapp', tokenJwt);
        }
        return response
        
    }

    function handleExecuteLogout(){
        setHasUser(null)
        Cookies.remove('auth_token_triapp')
    }

    return (
        <AuthContext.Provider value={{hasUser, handleValidateLogin, handleExecuteLogout}}>
            {children}
        </AuthContext.Provider>
    )
}