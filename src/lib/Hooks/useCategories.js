import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/category.service";

const useCategories = () => {
    const [categories , setCategories] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCategories();
                setCategories(response?.data?.categories || []);
            } catch (err) {
                console.log(err);
            }finally{
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, []);

    return {categories , isLoading}
};

export default useCategories;