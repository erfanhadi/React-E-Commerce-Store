import api from "./api";

const createProduct = async (formData) => {
    const { data } = await api.post("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return data;
};

export default createProduct;