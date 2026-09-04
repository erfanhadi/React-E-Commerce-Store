import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import * as AuthService from "./../services/auth.service"

function AuthProvider(children) {
    const [user , setUser] = useState(null);
    const [isLoading , setIsLoading] = useState(null);

    useEffect(()=>{
        const initAuth = async ()=>{
            try {
                const response = await AuthService.getMe();

                console.log(response);

                //setUser after catch user information response
            } catch (err) {
                console.error('[GetMe]' , err);
                
                setUser(null);
            }finally{
                setIsLoading(false);
            }
        }
    });

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

export default AuthProvider