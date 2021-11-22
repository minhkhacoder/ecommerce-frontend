import axios from "../helpers/axios"
import { productConstanst } from "./constants";


export const getProductBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/product/${slug}`);
        if(res.status === 200) {
            dispatch({
                type: productConstanst.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        } else {
            // dispatch({
                
            
            // })
        }
    }
}