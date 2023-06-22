import FormProduct from "@components/FormProduct.jsx";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "@services/api";
import useRequireAuth from "@hooks/useRequireAuth";

export default function Edit() {
    useRequireAuth();
    const [product, setProduct] = useState({});
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        if (!router.isReady) return;
        async function getProduct() {
            const response = await axios.get(
                endPoints.products.getProductId(id)
            );
            setProduct(response.data);
        }
        getProduct();
    }, [router?.isReady]);

    return <FormProduct product={product} />;
}
