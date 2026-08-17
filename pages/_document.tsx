import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Plausible analytics - replace data-domain with yourdomain.com */}
          {/* <script async defer data-domain="yourdomain.com" src="https://plausible.io/js/plausible.js"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
