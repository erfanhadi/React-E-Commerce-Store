import { useEffect, useState } from "react";
import { getAllCategories } from "../../services/category.service";

const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            try {

                const res = await getAllCategories();

                if (mounted) {
                    setCategories(res?.data?.categories || []);
                }

            } catch (err) {
                mounted && console.log(err);
            } finally {
                mounted && setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    return { categories, isLoading };
};

export default useCategories;
