import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import * as AuthService from "./../services/auth.service"

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const initAuth = async () => {
        try {
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

    const Logout = () => {
        //codes
    };

    const refreshUser = async () => {
        initAuth();
    };

    const value = {
        user,
        isLoading,
        refreshUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;