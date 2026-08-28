import {z} from 'zod';

export const contactUsSchema = z.object({
    name : z
    .string()
    .trim()
    .min(3 , {
        message: "نام شما حداقل باید شامل 3 کاراکتر باشد"
    })
    .max(50 , {
        message: "نام شما نباید بیش از 50 کاراکتر باشد"
    }),

    phone : z
    .string()
    .trim()
    .regex(/^[0-9]{10,11}$/,{
        message: "فرمت شماره موبایل صحیح نمیباشد"
    }),

    subject: z
    .string()
    .trim()
    .min(3, {
        message: "موضوع پیام باید حداقل شامل 3 کاراکتر باشد"
    })
    .max(100,{
        message: "تعداد کاراکتر های موضوع شما از حد مجاز عبور کرده است"
    }),

    content: z
    .string()
    .trim()
    .min(10,{
        message: "توضیحات شما باید حداقل 10 کاراکتر باشد"
    })
    .max(1000,{
        message: "محتوای توضیحات شما از حد مجاز بیشتر است"
    })
})