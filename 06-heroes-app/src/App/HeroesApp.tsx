import { useEffect, useReducer } from "react"
import { AppRouter } from "../Routers/AppRouter"
import { AuthContext } from '../Auth/authContext'
import { authReducer } from "../Auth/authReducer"

const init = () => {
    const value = localStorage.getItem('user');

    return value ? JSON.parse(value) : { logged: false };
}

export const HeroesApp = () => {
    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));        
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
