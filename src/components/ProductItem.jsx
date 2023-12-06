import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import styles from "@styles/ProductItem.module.scss";

function ProductItem({ product }) {
    const { addToCart, setSelectedProduct, toggleProductDetail } =
        useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    const productInfo = (productDetail) => {
        setSelectedProduct(productDetail);
        toggleProductDetail();
    };

    if (!product.images || !product.images[0].startsWith("http")) {
        return null;
    }

    return (
        <div className={styles.ProductItem}>
            <Image
                onClick={() => productInfo(product)}
                src={product?.images[0]}
                alt={product?.title}
                width={640}
                height={640}
                priority
                // className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            <div className={styles["product-info"]}>
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <button type="button" onClick={() => handleClick(product)}>
                    <Image
                        src={addToCartImage}
                        alt="add To Cart Image"
                        width={24}
                        height={24}
                    />
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
