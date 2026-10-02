import { useState } from "react";

const emptySeller = {
    id: "",
    price: "",
    stock: 0,
};

const emptyPair = { key: "", value: "" };

const useProductForm = () => {
    const [form, setForm] = useState({
        name: "",
        slug: "",
        description: "",
        images: [],
        sellers: [{ ...emptySeller }],
        filterValues: [{ ...emptyPair }],
        customFields: [{ ...emptyPair }],
    });

    const [selectedCategory, setSelectedCategory] = useState(null);

    const setField = (name, value) =>
        setForm((prev) => ({ ...prev, [name]: value }));

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const addSeller = () => {
        setForm((prev) => ({
            ...prev,
            sellers: [...prev.sellers, { ...emptySeller }],
        }));
    };

    const removeSeller = (index) => {
        setForm((prev) => ({
            ...prev,
            sellers: prev.sellers.filter(_, (i) => i !== index),
        }));
    };

    const updateSeller = (index, key, value) => {
        setForm((prev) => ({
            ...prev,
            sellers: prev.sellers.map((seller, i) =>
                i === index ? { ...seller, [key]: value } : seller,
            ),
        }));
    };

    const addPair = (fieldName) => {
        setForm((prev) => ({
            ...prev,
            [fieldName]: [...prev[fieldName], { ...emptyPair }],
        }));
    };

    const removePair = (fieldName, index) => {
        setForm((prev) => ({
            ...prev,
            [fieldName]: prev[fieldName].filter((_, i) => i !== index),
        }));
    };

    const updatePair = (fieldName, index, key, value) => {
        setForm((prev) => ({
            ...prev,
            [fieldName]: prev[fieldName].map((item, i) =>
                i === index ? { ...item, [key]: value } : item,
            ),
        }));
    };

    const setImages = (files) => setField("images", files);

    const buildFormData = () => {
        const formData = new FormData();

        formData.append("name", form.name);
        formData.append("slug", form.slug);
        formData.append("description", form.description);
        formData.append("categoryId", selectedCategory || "");

        const sellersPayload = form.sellers
            .filter((seller) => seller.id && seller.price)
            .map((seller) => ({
                id: seller.id,
                price: Number(seller.price),
                stock: Number(seller.stock),
            }));

        formData.append("sellers",JSON.stringify(sellersPayload));

        const pairsToObject = (list) => {
            return list.reduce((obj, { key, value }) =>{
                if(key.trim()) obj[key.trim()] = value;
                return obj;
            }, {});
        };

        formData.append(
            "filterValues",
            JSON.stringify(pairsToObject(form.filterValues)),
        );

        formData.append(
            "customFields",
            JSON.stringify(pairsToObject(form.customFields)),
        );

        form.images.forEach((image) => {
            formData.append("images",image);
        });

        return formData;
    };

    const resetForm = () => {
        setForm({
            name: "",
            slug: "",
            description: "",
            images: [],
            sellers: [{ ...emptySeller }],
            filterValues: [{ ...emptyPair }],
            customFields: [{ ...emptyPair }],
        });

        setSelectedCategory(null);
    };

    return {
        form,
        selectedCategory,
        setSelectedCategory,
        setField,
        addSeller,
        removeSeller,
        updateSeller,
        addPair,
        removePair,
        updatePair,
        setImages,
        buildFormData,
        resetForm,
    };
};

export default useProductForm;
