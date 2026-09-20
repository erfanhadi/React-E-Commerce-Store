import { useState } from "react";

function CascadeCategories({ categories }) {
    const [path , setPath] = useState([]);
    
    const levels = [categories , ...path.map(cat => cat.subCategories || [] )];

    const handleSelect = (levelIndex , id) => {
        const options = levels[levelIndex];
        const node = options.find((category) => category._id === id);

        const newPath = [...path.slice(0 , levelIndex), node];
        setPath(newPath);
    };

    return (
        <div className="space-y-3">
            {levels.map((options, index) => {

                if (!options || options.length === 0) {
                    return null;
                }

                return (
                    <select
                        key={index}
                        value={path[index]?._id || ""}
                        onChange={(e) => handleSelect(index , e.target.value)}
                        className="w-full h-10 text-sm rounded-md outline-none primary-border px-3 bg-white"
                    >
                        <option value="" disabled>
                            انتخاب دسته بندی
                        </option>

                        {options?.map((option) => (
                            <option key={option._id} value={option._id}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                );
            })}
        </div>
    );
}

export default CascadeCategories;
