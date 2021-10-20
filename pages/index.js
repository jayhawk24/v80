import Head from "next/head";
import App from "../components/App";
import MobileContainer from "../components/MobileContainer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>V80 Stocks</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <MobileContainer>
                    <App />
                </MobileContainer>
            </div>
        </div>
    );
}
