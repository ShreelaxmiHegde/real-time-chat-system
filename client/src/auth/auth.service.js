import api from "../api/axios";

export const signup = async (formData) => {
    console.log(formData);
    let res = await api.post("/signup", formData);
    return res.message;
}

export const login = async (formData) => {
    let res = await api.post("/login", formData);
    console.log(res);
    return res.message;
}