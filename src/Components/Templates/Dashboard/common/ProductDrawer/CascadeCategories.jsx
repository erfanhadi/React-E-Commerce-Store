function CascadeCategories({ categories }) {
    const levels = [categories];
    console.log(levels);

    const handleSelect = () => {
        //codes
    };

    return (
        <div className="space-y-3">
            {levels.map((options, index) => {
                return (
                    <select
                        key={index}
                        // value={ }
                        onChange={e => handleSelect}
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
