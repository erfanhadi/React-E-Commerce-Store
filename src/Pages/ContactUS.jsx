import { Link } from "react-router";
import SectionTitle from "../Components/Common/SectionTitle";
import InputField from "../Components/Templates/ContactUS/InputField";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { contactUsSchema } from "../validators/contactus";
import { validate } from "../validators";
import useContactUs from "../lib/Hooks/useContactUs";

const ContactUSPage = () => {
  const { form, isSubmitting, changeHandler, submitHandler } = useContactUs({
    name: "",
    phone: "",
    subject: "",
    content: "",
  });

  return (
    <main className="my-20 container" id="contact-us">
      <SectionTitle
        text="با ما تماس بگیرید"
        description="از طریق فرم زیر با ما تماس بگیرید و تیم فنی شاپینو در اسرع وقت به راهنمایی شما پاسخ خواهند داد."
      />

      <div
        id="contact-area"
        className="grid grid-cols-2 gap-10 p-5 border rounded-3xl border-neutral-300 mt-10"
      >
        <div className="w-full">
          <p className="mb-10 text-sm text-neutral-600">
            کاربر محترم, برای پاسخگویی بهتر لطفا تمامی فیلد های زیر را تکمیل
            کنید.
          </p>
          <div className="grid grid-cols-2 gap-5 **:w-full">
            <InputField
              value={form.name}
              onChange={changeHandler}
              name="name"
              placeholder="مثال: امین سعیدی"
              label="نام و نام خانوادگی"
            />
            <InputField
              value={form.phone}
              onChange={changeHandler}
              name="phone"
              placeholder="مثال: 09911871596"
              label="شماره موبایل"
            />

            <InputField
              value={form.subject}
              onChange={changeHandler}
              name="subject"
              type="text"
              placeholder="مثال: مرجوع کردن محصول"
              fullWidth
              label="موضوع شما"
            />

            <div className="col-span-2">
              <label
                htmlFor="contact-message"
                className="text-xs select-none text-neutral-500"
              >
                محتوا:
              </label>
              <textarea
                value={form.content}
                onChange={changeHandler}
                name="content"
                id="contact-message"
                className="h-10 rounded-md mt-2.5 border text-sm py-4 min-h-[140px] border-neutral-200 ring-offset-2 px-4 duration-150 focus-within:ring-4 ring-sky-400/40 focus-within:outline-none"
                placeholder="مثال: قصد مرجوعی محصول با شناسه #124214 را دارم"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center text-sm mt-10 justify-end gap-3">
            <Link to="/" className="text-red-600 px-4 underline cursor-pointer">
              انصراف
            </Link>

            <button
              className={` bg-linear-to-t from-blue-600 px-4 py-2.5 rounded-md text-white cursor-pointer hover:opacity-90
            focus-within:ring-4 ring-sky-300/50 ring-offset-2 duration-150 to-blue-400 max-w-max ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : null
            }`}
              onClick={submitHandler}
              disabled={isSubmitting}
            >
              {isSubmitting ? "درحال ارسال..." : "ثبت و ارسال"}
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            className="object-cover scale-80"
            src="/assets/static/contact-us.png"
          />
        </div>
      </div>
      <div className="space-y-10 my-10">
        <SectionTitle
          text="مراجعه حضوری"
          description="شما می‌توانید به صورت حضوری به یکی از دفاتر رسمی شاپینو مراجعه کنید و با همکاران ما در ارتباط باشید."
        />

        {/* <Maps /> */}
      </div>
    </main>
  );
};

export default ContactUSPage;
