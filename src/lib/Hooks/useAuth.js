import { useContext, useState } from "react"
import { useNavigate } from "react-router";
import { validate } from "../../validators/index";
import { sendOtpSchema,verifyOtpSchema } from "../../validators/auth";
import * as authService from "../../services/auth.service";
import { toast } from "sonner";
import useCountdown from "./useCountdown";
import AuthContext from "../../context/AuthContext";

export const useAuth = () => {
    const [phone , setPhone] = useState("");
    const [otp , setOtp] = useState("");
    const [isSentOtp , setIsSentOtp] = useState(false);
    const {restart , getFormattedTime , isExpired} = useCountdown(120);
    const navigate = useNavigate();
    const {refreshUser} = useContext(AuthContext);

    const handlePhoneChange = (e)=>{
        setPhone(e.target.value);
    };

    const handleOtpChange = (e)=>{
        setOtp(e.target.value);
    };

    const sendOtp = async ()=>{
        if (!validate(sendOtpSchema, {phone})) return;

        const data = await authService.sendOtp(phone);
        toast.success("کد ارسال شد");

        setIsSentOtp(true);

        restart();
    };

    const resendOtp = async ()=>{
        setOtp("");
        const data = await authService.sendOtp(phone);

        restart();
        toast.success("کد جدید ارسال شد");
    };

    const verifyOtp = async ()=>{
        if (!validate(verifyOtpSchema,{phone ,otp})) return;

        const data = await authService.verifyOtp(phone, otp);

        return data;
    };

    const login = async ()=>{
        const data = await verifyOtp();

        if (!data) return;

        //save user token

        toast.success("با موفقیت وارد شدید")
        //navigate to dashboard
        navigate("/");
        refreshUser();
    };
    
    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            if (isSentOtp) {
                await login();
            } else {
                await sendOtp();
            }
        } catch (error) {
            if (error.status === 400) {
                toast.error("کد نادرست است")
            }
        }
    };

    return{
        phone,
        otp,
        isSentOtp,
        isExpired,
        getFormattedTime,
        resendOtp,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit
    }
}