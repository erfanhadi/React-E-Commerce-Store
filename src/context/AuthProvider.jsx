import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import * as AuthService from "./../services/auth.service"

function AuthProvider({ children }) {
    const [user , setUser] = useState(null);
    const [isLoading , setIsLoading] = useState(null);

    useEffect(()=>{
        const initAuth = async ()=>{
            try {
                const response = await AuthService.getMe();

                setUser(response.data.user);
            } catch (err) {
                console.error('[GetMe]' , err);
                
                setUser(null);
            }finally{
                setIsLoading(false);
            }
        };

        initAuth();
    } ,[]);

    const Logout = ()=>{
        //codes
    };

    const value = {
        user,isLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;