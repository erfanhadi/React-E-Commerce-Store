import api from "./api";

export const getAllCategories = async () => {
    const {data} = await api.get("/category");

    return data;
};