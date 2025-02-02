import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import User from "../models/User";

interface AuthContextType {
    user: User|null;
    login: (user:User) => void;
    logout: () => void
}

const AuthContext = createContext <AuthContextType | null> (null);

function AuthProvider ({children}:{children:ReactNode}) {
    const [user, setUser] = useState <User | null> (null)

    // 🔥 RECUPERA O USUÁRIO DO LOCALSTORAGE QUANDO A PÁGINA CARREGA 🔥
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token"); // Opcional
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}

export {AuthProvider, useAuth}