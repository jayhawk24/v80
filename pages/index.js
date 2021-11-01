import Head from "next/head";
import App from "../components/App";
import MobileContainer from "../components/MobileContainer";

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>V80 Stocks</title>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Exo&family=Roboto&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <MobileContainer>
                    <App data={props.data} />
                </MobileContainer>
            </div>
        </div>
    );
}
