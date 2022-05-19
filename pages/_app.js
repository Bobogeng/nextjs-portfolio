import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Script src="https://unpkg.com/akar-icons-fonts"></Script>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
