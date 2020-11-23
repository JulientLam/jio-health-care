import categoryApi from "api/categoryApi";
import categoryJson from "../categories.config.json";
export const getCategoryApi = () => {
    const fetchData = async() => {
        try {
            // console.log(JSON.stringify(categoryJson))

            const res = await categoryApi.getAll({ limited: 1782 })
            return {
                type: "GET_ALL",
                payload: res.data.slice(1)
            }
        } catch (e) {
            console.log("ERROR: " + e)
            return {
                type: "GET_ALL",
                payload: categoryJson.slice(1)
            }
        }
    }

    return fetchData();
}

export const getCategoryBySlugName = (slug) => {
    return { type: "CATEGORY_BY_NAME_SLUG", payload: slug }
}

export const removeItemInUserCart = (idItem) => {
    return { type: "REMOVE_ITEM", payload: idItem };

}