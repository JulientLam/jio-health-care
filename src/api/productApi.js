const { default: axiosClient } = require("./axiosClient");

const productApi = {
    getProductByCategory: (params) => {
        const url = `/products`;
        return axiosClient.get(url, { params });
    },
    getProductById: (param) => {
        const url = `/products/${param}`;
        return axiosClient.get(url, { params: {} });
    },
    getProductsSuggestion: (params) => {
        const url = '/getSuggestedProducts';
        return axiosClient.get(url, { params });
    }
}
export default productApi;