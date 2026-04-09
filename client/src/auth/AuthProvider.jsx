import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { setToken, getToken, clearToken } from "../utils/token";
import { getUser } from "./auth.service";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const token = getToken();

            if (!token) {
                return setLoading(false)
            }

            try {
                let userData = await getUser(token);
                setUser(userData);
            } catch (err) {
                console.log(err);
                clearToken();
                setUser(null);
            }

            setLoading(false);
        }

        initAuth();
    }, []);

    const login = (data) => {
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