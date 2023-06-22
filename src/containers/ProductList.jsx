import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import styles from "@styles/ProductList.module.scss";
import endPoints from "@services/api";

function ProductList() {
    const totalProducts = useGetProducts(
        endPoints.products.getProducts,
        120,
        0
    );
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={styles.ProductList}>
                    {totalProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductList;
