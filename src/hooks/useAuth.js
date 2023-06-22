import React, { createContext, useContext, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import endPoints from "@services/api";

const Authcontext = createContext();

export default function ProviderAuth({ children }) {
    const auth = useProvideAuth();
    return <Authcontext.Provider value={auth}>{children}</Authcontext.Provider>;
}

export const useAuth = () => useContext(Authcontext);

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const options = {
        headers: {
            accept: "*/*",
            "Content-Type": "application/json",
        },
    };

    const signIn = async (email, password) => {
        try {
            const { data: accessToken } = await axios.post(
                endPoints.auth.login,
                {
                    email,
                    password,
                },
                options,
            );
            if (accessToken) {
                const token = accessToken.access_token;
                Cookie.set("token", token, {
                    expires: 5,
                    SameSite: "None",
                    secure: true,
                });
                axios.defaults.headers.Authorization = `Bearer ${token}`; // authorization foor each users. token.
                const { data: getUser } = await axios.get(
                    endPoints.auth.profile,
                );
                setUser(getUser);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setLoginError("Incorrect email or password");
            } else {
                setLoginError("An error occurred during login");
            }
            throw error;
        }
    };
    const signOut = () => {
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = "/templates/Login";
    };
    return {
        user,
        signIn,
        signOut,
        loginError,
    };
}
