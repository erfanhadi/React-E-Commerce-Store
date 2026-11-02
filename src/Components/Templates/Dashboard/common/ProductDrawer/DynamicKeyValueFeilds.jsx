import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";

function DynamicKeyValueFeilds({ title,
    items,
    onAdd,
    onRemove,
    onChange,
    keyPlaceholder = "کلید (مثلا رم)",
    valuePlaceholder = "مقدار (مثلا 8 گیگابایت)", }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-zinc-700">{title}</label>
                <button
                    type="button"
                    onClick={onAdd}
                    className="text-blue-500 text-xs flex items-center gap-1"
                >
                    <BiPlus /> افزودن
                </button>
            </div>

            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <input
                            className="w-1/2 h-9 text-sm rounded-md outline-none primary-border px-2"
                            value={item.key}
                            onChange={(event) => onChange(index, "key", event.target.value)}
                            placeholder={keyPlaceholder}
                        />

                        <input
                            className="w-1/2 h-9 text-sm rounded-md outline-none primary-border px-2"
                            value={item.value}
                            onChange={(event) => onChange(index, "value", event.target.value)}
                            placeholder={valuePlaceholder}
                        />

                        {items.length > 1 && (
                            <button
                                className="text-red-500 shrink-0"
                                type="button"
                                onClick={() => onRemove(index)}
                            >
                                {" "}
                                <HiX />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DynamicKeyValueFeilds