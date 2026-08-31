import { useState } from "react"
import { useNavigate } from "react-router";

export const useAuth = () => {
    const [phone , setPhone] = useState("");
    const [otp , setOtp] = useState("");
    const [isSentOtp , setIsSentOtp] = useState(false);
    const navigate = useNavigate();

    const handlePhoneChange = (e)=>{};
    const handleOtpChange = (e)=>{};

    const sendOtp = async ()=>{};
    const verifyOtp = async ()=>{};

    const login = async ()=>{};
    
    const handleSubmit = async (e)=>{};

    return{
        phone,
        otp,
        isSentOtp,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit
    }
}