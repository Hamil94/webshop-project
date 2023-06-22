import axios from "axios";
import endPoints from "@services/api";

const addProduct = async (body) => {
    const config = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
    };
    const response = await axios.post(
        endPoints.products.addProducts,
        body,
        config,
    );
    return response.data;
};

const deleteProducts = async (id) => {
    const response = await axios.delete(endPoints.products.deleteProductId(id));
    return response.data;
};

const updateProduct = async (id, body) => {
    const config = {
        Headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
    };
    const response = await axios.put(
        endPoints.products.updateProductId(id),
        body,
        config,
    );
    return response.data;
};

export { addProduct, deleteProducts, updateProduct };
