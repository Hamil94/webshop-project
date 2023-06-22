import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext.js";
import Link from "next/link";
import styles from "@styles/MyOrder.module.scss";

function Checkout() {
    const { state } = useContext(AppContext);

    // sume of the price.
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    // The date of the purchase.
    const getData = () => {
        const date = new Date();
        return date.toLocaleDateString();
    };
    return (
        <div className={styles.Checkout}>
            <div className={styles["Checkout-container"]}>
                <h1 className={`${styles.title} text-lg`}>My order</h1>
                <div className={styles["Checkout-content"]}>
                    <div className={`${styles.order} bg-text-input-field`}>
                        <p>
                            <span className="text-md">{getData()}</span>
                            <span className="text-sm text-very-light-pink">
                                {state.cart.length}{" "}
                                {state.cart.length === 1
                                    ? "article"
                                    : "articles"}
                            </span>
                        </p>
                        <p>${sumTotal()}</p>
                    </div>
                </div>
                {state.cart.map((product) => (
                    <OrderItem
                        key={`orderItem-${product.id}`}
                        product={product}
                    />
                ))}
                <Link href="/" className={styles["primary-button"]}>
                    Buy
                </Link>
            </div>
        </div>
    );
}

export default Checkout;
