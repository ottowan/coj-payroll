import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/static/assets/css/bulma-0.8.2/css/bulma.min.css" />
          <link rel="stylesheet" href="/static/assets/css/core.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>
        <body className="layout-documentation page-layout">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument