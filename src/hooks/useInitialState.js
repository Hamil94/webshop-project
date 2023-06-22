import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage.js";

const initialState = {
    cart: [],
    orderIsOpen: false,
    productDetailIsOpen: false,
};
const selectedProductDetail = { selectedProduct: null };

const useInitialState = () => {
    const [state, setState] = useLocalStorage("cart", initialState);
    const [productDetail, setProductDetail] = useState(selectedProductDetail);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.includes(payload)
                ? state.cart
                : [...state.cart, payload],
        });
    };

    const setSelectedProduct = (payload) => {
        setProductDetail({
            ...productDetail,
            selectedProduct: payload,
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((items) => items.id !== payload.id),
        });
    };

    const toggleOrder = () => {
        setState({
            ...state,
            orderIsOpen: !state.orderIsOpen,
            productDetailIsOpen: false,
        });
    };
    const toggleProductDetail = () => {
        setState({
            ...state,
            productDetailIsOpen: !state.productDetailIsOpen,
            orderIsOpen: false,
        });
    };

    return {
        state,
        productDetail,
        addToCart,
        removeFromCart,
        toggleOrder,
        toggleProductDetail,
        setSelectedProduct,
    };
};

export default useInitialState;
