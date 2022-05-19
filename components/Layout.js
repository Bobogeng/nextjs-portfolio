import Head from "next/head";
import Navbar from "./Navbar";

export default function layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navbar />
            {props.children}
        </div>
    );
}
