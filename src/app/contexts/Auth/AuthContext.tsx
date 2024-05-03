import { User } from "@/app/types/IUser";
import { createContext } from "react";

type AuthContextTye = {
    user: User | null;
    signIn: (email: string , password: string) => Promise<boolean>
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextTye>(null!);