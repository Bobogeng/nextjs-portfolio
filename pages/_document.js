import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" />
                <link rel="icon" href="bobogeng-icon.png" sizes="180x180" type="image/png" />
            </Head>
            <body className="bg-white text-darkb dark:text-white dark:bg-darkb transition-none">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
