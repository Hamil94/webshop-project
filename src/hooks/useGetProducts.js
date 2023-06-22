import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (endPoint, currentPage, itemsPerPage) => {
    const [products, setProducts] = useState([]);

    async function fetchData() {
        const response = await axios.get(endPoint(currentPage, itemsPerPage));
        setProducts(response.data);
    }
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(`Error fetch data: ${error}`);
        }
    }, [currentPage, itemsPerPage]);
    return products;
};

export default useGetProducts;
