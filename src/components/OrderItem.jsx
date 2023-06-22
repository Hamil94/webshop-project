import React, { useContext } from "react";
import AppContext from "@context/AppContext";
import Image from "next/image";
import styles from "@styles/OrderItem.module.scss";
import close from "@icons/icon_close.png";

function OrderItem({ product }) {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (item) => {
        removeFromCart(item);
    };

    return (
        <div className={styles.OrderItem}>
            <figure>
                <Image
                    src={product.images[1]}
                    alt={product.title}
                    width={240}
                    height={240}
                    priority
                />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <Image
                src={close}
                alt="close"
                width={25}
                height={25}
                onClick={() => handleRemove(product)}
            />
        </div>
    );
}

export default OrderItem;
