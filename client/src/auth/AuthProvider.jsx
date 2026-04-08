import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { setToken, getToken, clearToken } from "../utils/token";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTokenFn = () => {
            const token = getToken();
    
            if(token) {
                // optional: fetch user from backend
                setUser({ token });
            }

            setLoading(false);
        }

        getTokenFn();
    }, []);

    const login = (data) => {
        console.log("auto login credentials: ", data.token, data.user)
        setToken(data.token);
        setUser(data.user);
    }

    const logout = () => {
        clearToken();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}