import { z } from "zod";

export const sendOtpSchema = z.object({
    phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/ , {message: "شماره موبایل معتبر نیست"})
});

export const verifyOtpSchema = z.object({
    phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/ , {message: "شماره موبایل معتبر نیست"}),

    otp: z
    .string()
    .trim()
    .length(4, {message: "کد تایید باید شامل 4 رقم باشد"}),
});