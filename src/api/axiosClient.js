import Axios from "axios";
import queryString from "query-string";

const axiosClient = Axios.create({
    baseURL: process.env.REACT_APP_JIO_PHARMACY_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params, userID = 1, token = 'f8d96369-7afb-11e8-adf6-027ee55612c4') => queryString.stringify({...params, userID, token }),
});

axiosClient.interceptors.request.use(async(config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;