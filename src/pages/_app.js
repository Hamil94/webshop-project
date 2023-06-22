import React from "react";
import AppContext from "@context/AppContext";
import Header from "@components/Header.jsx";
import ProviderAuth from "@hooks/useAuth.js";
import MainLayout from "@layout/MainLayout";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.css";

function MyApp({ Component, pageProps }) {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <ProviderAuth>
                <Header />
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </ProviderAuth>
        </AppContext.Provider>
    );
}
export default MyApp;
