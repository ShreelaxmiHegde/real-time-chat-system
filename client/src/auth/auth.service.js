import api from "../api/axios";

export const signup = async (formData) => {
    let res = await api.post("/signup", formData);
    return res.data;
}

export const loginUser = async (formData) => {
    let res = await api.post("/login", formData);
    return res.data;
}

export const getUser = async (token) => {
    let res = await api.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data.user;
}