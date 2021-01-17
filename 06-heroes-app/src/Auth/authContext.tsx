import { createContext } from "react";
import { User } from "../Interfaces/User";

interface authContextInterface{
    user: User,
    dispatch: any | null
}

export const AuthContext = createContext<authContextInterface>(
    {
        user: {},
        dispatch: null
    }
);