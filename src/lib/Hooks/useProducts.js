import { useEffect, useState } from "react"
import { getAllProducts } from "../../services/product.service"

export const useProducts = (limit = 10) => {
    const [products , setProducts] = useState([]);
    const [pagination , setPagination] = useState(null);
    const [page , setPage] = useState(1);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState("");

    const fetchProducts = async () => {
        setIsLoading(true);
        setError("");

        try {
            const res = await getAllProducts({page , limit});
            setProducts(res?.data?.products || null);
            setPagination(res?.data?.pagination || null);
        } catch (error) {
            setError(error?.response?.data?.message || "خطایی در دریافت محصولات رخ داده است");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    },[page , limit])

    return {
        products,
        pagination,
        page,
        setPage,
        isLoading,
        error,
    };
};