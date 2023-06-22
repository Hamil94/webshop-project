import React, { useContext, useState } from "react";
import ProductInfo from "@components/ProductInfo";
import AppContext from "@context/AppContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import styles from "@styles/ProductDetail.module.scss";

function ProductDetail() {
    const { productDetail, toggleProductDetail } = useContext(AppContext);
    if (!productDetail.selectedProduct) {
        return null; // do not render the component if there's no selected product.
    }

    const closeProductDetail = () => {
        toggleProductDetail(false);
    };

    return (
        <aside
            className={`${styles.ProductDetail} bg-white shadow-md shadow-very-light-pink`}
        >
            <div className={`${styles["ProductDetail-close"]} bg-white`}>
                <button
                    type="button"
                    className="block h-6 w-6 absolute bottom-0 right-0"
                    onClick={closeProductDetail}
                >
                    <XMarkIcon className="h-full w-full" aria-hidden="true" />
                </button>
            </div>
            <ProductInfo product={productDetail.selectedProduct} />
        </aside>
    );
}

export default ProductDetail;
