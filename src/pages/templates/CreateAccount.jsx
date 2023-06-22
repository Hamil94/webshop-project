import React from "react";
import styles from "@styles/CreateAccount.module.scss";

function CreateAccount() {
    return (
        <div className={styles.CreateAccount}>
            <div className={styles["CreateAccount-container"]}>
                <h1 className={`${styles.title} text-lg`}>My Account</h1>
                <form action="/" className={styles.form}>
                    <div>
                        <label
                            htmlFor="name"
                            className={`${styles.label} text-sm`}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Hamilton"
                            className={`${styles.input} ${styles["input-name"]} bg-text-input-field text-md`}
                        />
                        <label
                            htmlFor="email"
                            className={`${styles.label} text-sm`}
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="yhailton@mail.com"
                            className={`${styles.input} ${styles["input-email"]} bg-text-input-field text-md`}
                        />
                        <label
                            htmlFor="password"
                            className={`${styles.label} text-sm`}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*************"
                            className={`${styles.input} ${styles["input-password"]} bg-text-input-field text-md`}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Create"
                        className={`${styles["primary-button"]} ${styles["login-button"]} bg-hospital-green text-white text-md`}
                    />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
