import api from "./api";

const createProduct = async (formData) => {
    try {

        const { data } = await api.post("/products", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getAllProducts = async (params) => {
    const { data } = await api.get('/products' , {params});

    return data;
};

export default createProduct;