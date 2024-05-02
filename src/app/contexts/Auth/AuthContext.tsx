import { User } from "@/app/types/User";
import { createContext } from "react";

type AuthContextTye = {
    user: User | null;
    signIn: (email: string , password: string) => Promise<boolean>
    signOut: () => void;
}

export const AuthContext = createContext<AuthContextTye>(null!);