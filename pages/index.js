import Head from "next/head";
import MobileContainer from "../components/Mobile/MobileContainer";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import MobileAppContainer from "../components/containers/MobileAppContainer";
import useMobileDetect from "../components/hooks/useMobileDetect";
import Desktop from "../components/Desktop";

export default function Home(props) {
    const currentDevice = useMobileDetect();
    console.log(currentDevice.isMobile());
    return (
        <div>
            <Provider store={store}>
                <Head>
                    <title>V80 Stocks</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1, width=device-width"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
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
                {currentDevice.isMobile() ? (
                    <div className="main">
                        <MobileContainer>
                            <MobileAppContainer />
                        </MobileContainer>
                    </div>
                ) : (
                    <Desktop />
                )}
            </Provider>
        </div>
    );
}
