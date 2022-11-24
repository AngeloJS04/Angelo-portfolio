import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='stylesheet' href='/assets/css/main.css' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <Script src="https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"/>
                <NextScript />
            </body>
        </Html>
    )
}