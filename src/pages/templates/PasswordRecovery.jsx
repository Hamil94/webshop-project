import React from "react";
import "../styles/PasswordRecovery.scss";

import yardSale from "../assets/logos/logo_yard_sale.svg";

function PasswordRecovery() {
    return (
        <div className="PasswordRecovery">
            <div className="PasswordRecovery-container">
                <img src={yardSale} alt="logo" className="logo" />
                <h1 className="title">Password recovery</h1>
                <p className="subtitle">
                    Inform the email address used to create your account
                </p>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">
                        Email address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="hamilton@posada.com"
                        className="input input-email"
                    />
                    <input
                        type="submit"
                        value="Confirm"
                        className="primary-button login-button"
                    />
                </form>
            </div>
        </div>
    );
}

export default PasswordRecovery;
