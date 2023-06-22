import React from "react";
import styles from "@styles/Menu.module.scss";

function Menu() {
    return (
        <div className={styles.Menu}>
            <ul>
                <li>
                    <a href="/templates/Orders" className={styles.title}>
                        My orders
                    </a>
                </li>
                <li>
                    <a href="/templates/MyAccount">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
