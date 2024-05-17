import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthProvider"
import { useRouter} from 'next/navigation'


export const useVerifyIfHasUserLogged = () => {
    const authContext = useContext(AuthContext)
    const hasUserLogged = authContext.hasUser
    const router = useRouter();
    if(!hasUserLogged){
        router.replace('/Login')
    }
}