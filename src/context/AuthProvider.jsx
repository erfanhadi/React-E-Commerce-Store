import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import * as AuthService from "./../services/auth.service"

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const initAuth = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.getMe();

            setUser(response.data.user);
        } catch (err) {
            console.error('[GetMe]', err);

            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        initAuth();
    }, []);

    const Logout = async () => {
        try {
            setIsLoading(true);
            const response = await AuthService.logout();

            console.log(response);
        } catch (error) {
            console.log('[logout] ->',error);
            
        }finally {
            setUser(null);
            setIsLoading(false);
        }
    };

    const refreshUser = async () => {
        initAuth();
    };

    const value = {
        user,
        isLoading,
        Logout,
        refreshUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;