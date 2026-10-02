import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth dark">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Pratap Solat — Software Developer & Full-Stack Engineer specializing in Java, Spring Boot, React, Next.js, TypeScript, Flutter, and RESTful APIs."
          />
          <meta
            name="keywords"
            content="Pratap Solat, Software Developer, Full-Stack Engineer, Java Developer, Spring Boot, React, Next.js, Flutter, Pune, Portfolio"
          />
          <meta name="author" content="Pratap Solat" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-slate-50 dark:bg-[#070a13] text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
