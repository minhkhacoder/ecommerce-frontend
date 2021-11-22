import { productConstanst } from "../actions/constants"

const initState = {
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
    },
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstanst.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice,
                }
            }
            break;
    }
    return state;
}