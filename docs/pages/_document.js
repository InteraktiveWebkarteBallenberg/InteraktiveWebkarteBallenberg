// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/images/ballenberg.svg" type="image/svg+xml" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
