import { useState } from "react"

const emptySeller = {
    id: "",
    price: "",
    stock: "",
}

const emptyPair = {key : "",value: ""};

const useProductForm = () => {
    const [form , setForm] = useState({
        name: "",
        slug: "",
        description: "",
        images: [],
        sellers: [{...emptySeller}],
        filterValues: [{...emptyPair}],
        customFields: [{...emptyPair}],
    });

    const [selectedCategory,setSelectedCategory] = useState(null);

    const setField = (name, value) => setForm(prev => ({ ...prev, [name]: value }));

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const addSeller = () =>{
        setForm((prev) => ({
            ...prev,
            sellers : [...prev.sellers, {...emptySeller}],
        }));
    };

    const removeSeller = (index) => {
        setForm((prev) => ({
            ...prev,
            sellers: prev.sellers.filter(_, (i) => i !== index),
        }));
    };

    const updateSeller = (index , key , value)=>{
        setForm(prev => ({...prev , sellers: prev.sellers.map((seller, i) => i === index ? {...seller, [key]: value} : seller)}))
    };

    return{
        form,
        selectedCategory,
        setSelectedCategory,
        setField,
    }
};

export default useProductForm