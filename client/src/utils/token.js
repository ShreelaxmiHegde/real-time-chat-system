let token = null;

export const setToken = (newToken) => {
    token = newToken;
    localStorage.setItem("token", newToken);
}

export const getToken = () => {
    return token || localStorage.getItem("token");
}

export const clearToken = () => {
    token = null;
    localStorage.removeItem("token");
}