import api from "./axios.js";

export const fetchGroups = async () => {
    console.log('fetching groups..')
    let res = await api.get('/groups/');
    return res.data;
}

export const createGroup = async (data) => {
    let res = await api.post('/groups/', data);
    console.log(res.data);
}