import axios from "axios";

export const sendContactUsMessage = async (form) => {
    return axios.post(
        "https://shopino.iran.liara.run/v1/contact-us",
        form,
    );
};
