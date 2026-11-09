import { BiPlus } from 'react-icons/bi'
import { HiX } from 'react-icons/hi'
import AsyncSelect from 'react-select/async'
import {searchSellers} from '../../../../../services/sellers.service'

function SellerFields({
    sellers,
    onAdd,
    onChange,
    onRemove
}) {
    const loadSellersOptions = async (inputValue) => {
        const sellers = await searchSellers(inputValue);

        return sellers.map((seller) => ({
            value: seller._id,
            label: seller.name,
        }));
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-zinc-700">فروشندگان</label>
                <button
                    type="button"
                    onClick={onAdd}
                    className="text-blue-500 text-xs flex items-center gap-1"
                >
                    <BiPlus /> افزودن فروشنده
                </button>
            </div>

            {sellers.map((seller, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div>
                        <AsyncSelect
                            cacheOptions
                            defaultOptions
                            loadOptions={loadSellersOptions}
                            value={seller.info}
                            onChange={(option) => {
                                onChange(index, "info", option);
                                onChange(index, "id", option?.value);
                            }}
                            loadingMessage={() => "در حال جستجو ..."}
                            noOptionsMessage={() => "فروشنده‌ای یافت نشد"}
                            placeholder="جستجوی فروشنده"
                        />
                    </div>

                    <input
                        value={seller.price}
                        onChange={(e) => onChange(index, "price", e.target.value)}
                        placeholder="قیمت"
                        type="number"
                        className="w-1/4 h-9 text-sm rounded-md outline-none primary-border px-2"
                    />

                    <input
                        value={seller.stock}
                        onChange={(e) => onChange(index, "stock", e.target.value)}
                        placeholder="موجودی"
                        type="number"
                        className="w-1/4 h-9 text-sm rounded-md outline-none primary-border px-2"
                    />

                    {sellers.length > 1 && (
                        <button
                            onClick={() => onRemove(index)}
                            type="button"
                            className="text-red-500 shrink-0"
                        >
                            <HiX />
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SellerFields