import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAdSenseHeader } from '../components/GoogleAdSense'
import { GoogleAnalyticsHeader } from '../components/GoogleAnalytics'

class LationDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <GoogleAdSenseHeader />
          <GoogleAnalyticsHeader />
          <link href="/fontawesome-free-5.15.1-web/css/fontawesome.min.css" rel="stylesheet" />
          <link href="/fontawesome-free-5.15.1-web/css/solid.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default LationDocument
