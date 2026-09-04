import axios from "axios";

export const sendOtp = async (phone) => {
    const { data } = await axios.post(
        "https://shopino.iran.liara.run/v1/auth/send",
        { phone },
    );

    return data;
};


export const verifyOtp = async (phone , otp) => {
    const { data } = await axios.post(
        "https://shopino.iran.liara.run/v1/auth/verify",
        { phone , otp ,isSeller: false },
        {
            withCredentials: true,
        },
    );

    return data;
};

export const getMe = async () => {
    //code
}