import { useEffect, useRef, useState } from "react";
import { HiX } from "react-icons/hi";
import { BiImageAdd } from "react-icons/bi";

const MAX_IMAGE = 10;

function ImageUploadField({ files, onChange }) {
    const [previewUrls , setPreviewUrls] = useState([]);
    const isFull = files.length >= MAX_IMAGE;
    const inputRef = useRef(null);

    const handleFiles = (e) => {
        const selectedImages = Array.from(e.target.files);
        const remaining = MAX_IMAGE - files.length;
        const imagesToAdd = selectedImages.slice(0,remaining);
        
        onChange([...files, ...imagesToAdd]);
    };

    const removeFile = (index) => {
        onChange(files.filter((_,i) => i !== index));
    };

    useEffect(() => {
        const urls = files.map((file) => URL.createObjectURL(file));

        setPreviewUrls(urls);

        return () => {
            urls.map(url => URL.revokeObjectURL(url))
        }
    }, [files]);

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-zinc-700">
                    {" "}
                    تصاویر محصول{" "}
                </label>
                <span className="text-xs text-zinc-400">
                    {files.length} از {MAX_IMAGE}
                </span>
            </div>
            <input
                type="file"
                ref={inputRef}
                className="hidden"
                multiple
                onChange={handleFiles}
                accept="images/*"
            />

            <div className="grid grid-cols-4 gap-2">
                {previewUrls.map((url, index) => (
                    <div
                        key={index}
                        className="relative aspect-square rounded-md overflow-hidden primary-border group"
                    >
                        <img
                            src={url}
                            className="w-full h-full object-cover"
                            alt=""
                        />

                        <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full size-5 text-xs flex items-center justify-center hover:bg-red-600"
                        >
                            <HiX />
                        </button>
                    </div>
                ))}

                {!isFull && (
                    <button
                        onClick={() => inputRef.current?.click()}
                        type="button"
                        className="aspect-square rounded-md primary-border border-dashed flex flex-col items-center justify-center gap-1 text-zinc-500 hover:bg-zinc-50 hover:text-blue-500 transition-colors"
                    >
                        <BiImageAdd className="text-xl" />
                        <span className="text-[11px]">افزودن تصویر</span>
                    </button>
                )}
            </div>
            {isFull && (
                <p className="text-xs text-zinc-400 mt-2">
                    حداکثر تعداد تصاویر ({MAX_IMAGE} عدد) انتخاب شده است.
                </p>
            )}
        </div>
    );
}

export default ImageUploadField;
