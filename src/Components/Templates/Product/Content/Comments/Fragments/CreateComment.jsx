const CreateComment = () => {
  return (
    <div className="col-span-3 space-y-3 bg-slate-50 rounded-lg border border-slate-200 max-h-max sticky top-4">
      <div>
        <label
          htmlFor="comment-fullName"
          className="text-xs select-none cursor-pointer text-slate-500"
        >
          نام شما:
        </label>
        <input
          type="text"
          id="comment-fullName"
          className="w-full h-10 rounded-md border border-slate-200 bg-white mt-1.5"
          placeholder="مثال: امین سعیدی"
        />
      </div>

      <div>
        <label
          htmlFor="comment-email"
          className="text-xs select-none cursor-pointer text-slate-500"
        >
          پست‌الکترونیکی:
        </label>
        <input
          type="email"
          id="comment-email"
          className="w-full h-10 rounded-md border border-slate-200 bg-white mt-1.5"
          placeholder="example: radfront@sabzshop.ir"
          dir="ltr"
        />
      </div>

      <div>
        <label
          htmlFor="comment-content"
          className="text-xs select-none cursor-pointer text-slate-500"
        >
          پست‌الکترونیکی:
        </label>
        <textarea
          name="comment-content"
          id="comment-content"
          className="w-full rounded-md border border-slate-200 bg-white mt-1.5 h-[130px]"
        ></textarea>
      </div>

      <button className="w-full text-xs h-10 bg-slate-800 text-white focus-within:ring-4! ring-slate-600/50">
        ثبت نظر
      </button>
    </div>
  );
};

export default CreateComment;
