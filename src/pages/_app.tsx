import Head from 'next/head';
import type { AppProps } from 'next/app';
import { NavBar } from '../components/utils/NavBar';
import { ScrollToTopButton } from '../components/utils/ScrollToTopButton';
import { Footer } from '../components/utils/Footer';
import '../styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
    <div className="root">
        <Head>
            <meta charSet="utf-8" />

            <meta name="theme-color" content="#d16162" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <title>Shutoko Revival Project - 首都高速复活计划</title>

            <meta
                key="description"
                name="description"
                content="Shutoko Revival Project（首都高速复活计划）官方网站，Assetto Corsa 平台上最极致的首都高速赛道模组。"
            />
            <meta
                key="og:title"
                name="og:title"
                content="Shutoko Revival Project - 首都高速复活计划"
            />
            <meta
                key="og:description"
                name="og:description"
                content="Shutoko Revival Project（首都高速复活计划）官方网站，Assetto Corsa 平台上最极致的首都高速赛道模组。"
            />
            <meta
                key="og:image"
                name="og:image"
                content="/A32NX_Front.jpeg"
            />
        </Head>
        <NavBar />
        <ScrollToTopButton />
        <Component {...pageProps} />
        <Footer />
    </div>
);

export default App;
