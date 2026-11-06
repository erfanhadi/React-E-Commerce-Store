import React, { useCallback, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import * as AuthService from './../services/auth.service';

function AuthProvider({ children, autoLogin = false }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(autoLogin);

    const getCurrentUser = useCallback(async () => {
        try {
            setIsLoading(true);

            const response = await AuthService.getMe();
            setUser(response.data.user);
        } catch (error) {
            console.error('[GetMe]', error);
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        try {
            setIsLoading(true);
            await AuthService.logout();
        } catch (error) {
            console.error('[Logout]', error);
        } finally {
            setUser(null);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (autoLogin) {
            getCurrentUser();
        }
    }, [autoLogin, getCurrentUser]);

    const value = {
        user,
        isLoading,
        getCurrentUser,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
