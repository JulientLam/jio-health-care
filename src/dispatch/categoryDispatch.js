import { getAllApi } from "actions/actionCreator"
import categoryApi from "api/categoryApi"

export const getCategories = () => async dispatch => {
    try {
        const res = await categoryApi.getAll({ limited: 1782 })
        dispatch(getAllApi(res.data))
    } catch (e) {
        dispatch(getAllApi([]))
    }

}