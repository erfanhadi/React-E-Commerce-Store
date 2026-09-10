import axios from "axios";

const api = axios.create({
    baseURL:"https://shopino.iran.liara.run/v1",
    withCredentials: true,

    timeout: 5000
});

export default api;