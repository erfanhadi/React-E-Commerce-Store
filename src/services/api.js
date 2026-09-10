import axios from "axios";
import { toast } from "sonner";

const api = axios.create({
    baseURL: "https://shopino.iran.liara.run/v1",
    withCredentials: true,

    headers: {
        "Content-Type": "application/json",
    },

    timeout: 5000,
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        switch (error.code) {
            case "ECONNABORTED": {
                toast.info("درخواست بیش از حد طول کشید");
                break;
            }
            case "ERR_NETWORK": {
                toast.info("مشکلی در ارتباط وجود دارد");
                break;
            }
        }

        switch (error.response?.status) {
            case 401: {
                // toast.info("دسترسی غیرمجاز");
                // Logout - Token
                break;
            }
            case 403: {
                toast.info("دسترسی غیرمجاز");
                break;
            }
            case 500: {
                toast.info("خطایی در سرور رخ داده است");
                break;
            }
        }

        return Promise.reject(error);
    },
);

export default api;