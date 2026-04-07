import api from "./axios.js";

export const fetchGroups = async () => {
    let res = await api.get('/groups/');
    return res.data;
}

export const createGroup = async (data) => {
    let res = await api.post('/groups/', data);
    console.log(res.data);
}

export const fetchMessages = async (groupId) => {
    let res = await api.get(`groups/${groupId}/messages`);
    return res.data;
}

export const sendMessage = async (data) => {
    let res = await api.post(`groups/${data.groupId}/messages`, data);
    return res.message;
}

export const signup = async (formData) => {
    console.log(formData);
    let res = await api.post("/signup", formData);
    return res.message;
}