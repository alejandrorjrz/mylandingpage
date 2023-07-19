
import React, { useState } from 'react';

interface AppContextI{
    token: string,
    user: user | null,
    setToken: (value: string) => void,
    setUser: (value: user | null) => void,
}

interface user{
    name: string,
    email: string,
    role: string,
    status: boolean,
    google: boolean,
    uid: string
}

export const AppContext = React.createContext({}as AppContextI);

export const Provider = ({ children }: any) =>{
    //no inicializamos vacio, preguntamos  al localStore
    const [token, setToken] = useState<string>(localStorage.getItem('token')||'');
    const [user, setUser] = useState<user | null>(JSON.parse(localStorage.getItem('user') || '{}'));   

    const values = {
        token,
        user,
        setToken,
        setUser,
    }
    
    return (<AppContext.Provider value={values}>{children}</AppContext.Provider>)

}
