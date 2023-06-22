import ProductList from "@containers/ProductList.jsx";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>React shop</title>
            </Head>
            <ProductList />
        </>
    );
}
