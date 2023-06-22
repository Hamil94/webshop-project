import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import Image from "next/image";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import styles from "@styles/ProductInfo.module.scss";

function ProductInfo({ product }) {
    const { addToCart } = useContext(AppContext);

    if (!product) {
        return null; // do not render the component if there's no procut.
    }

    const handleClick = (item) => {
        addToCart(item);
    };
    return (
        <>
            <Image
                src={product.images[0]}
                alt={product.title}
                width={640}
                height={640}
            />
            <div className={styles.ProductInfo}>
                <p>${product.price}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <button
                    className={`${styles["primary-button"]} ${styles["add-to-cart-button"]} bg-hospital-green text-white text-md`}
                    type="button"
                    onClick={() => handleClick(product)}
                >
                    <Image src={addToCartImage} alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;
