import React, { useContext, useEffect } from "react";
import OrderItem from "@components/OrderItem";
import AppContext from "@context/AppContext";
import Image from "next/image";
import Link from "next/link";
import arrow from "@icons/flechita.svg";
import styles from "@styles/ShoppingCart.module.scss";

function MyOrder() {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <aside className={styles.MyOrder}>
            <div className={styles["title-container"]}>
                <Image src={arrow} alt="arrow" />
                <p className={styles.title}>Shopping cart</p>
            </div>
            <div className={styles["my-order-content"]}>
                {state.cart.length > 0 ? (
                    <>
                        {state.cart.map((product) => (
                            <OrderItem product={product} key={product.id} />
                        ))}
                        <div className={styles.order}>
                            <p>
                                <span>Total</span>
                            </p>
                            <p>${sumTotal()}</p>
                        </div>
                        <Link
                            href="/templates/MyOrder"
                            className={styles["primary-button"]}
                        >
                            Checkout
                        </Link>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </aside>
    );
}

export default MyOrder;
