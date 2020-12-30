import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import { FacebookMessengerHeader, FacebookMessengerChatPlugin } from './FacebookMessenger'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit } from './GoogleAdSense'
import { GoogleAnalyticsHeader } from './GoogleAnalytics'
import Navigation from './Navigation'
import { adUnitIdMap } from '../utils/config'
import 'bootstrap/dist/css/bootstrap.min.css'

export const config = { amp: true }

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lation</title>
        <link rel="icon" href="/logo.png" />
        <link href="/fontawesome-free-5.15.1-web/css/fontawesome.min.css" rel="stylesheet" />
        <link href="/fontawesome-free-5.15.1-web/css/solid.min.css" rel="stylesheet" />
      </Head>
      <FacebookMessengerHeader />
      <GoogleAdSenseHeader />
      <GoogleAnalyticsHeader />
      <Navigation />
      {children}
      <Container style={{ marginTop: '2rem', marginBottom: '2rem', overflow: 'auto' }}>
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_official_site_banner} />
      </Container>
      <FacebookMessengerChatPlugin />
    </>
  )
}

AppLayout.defaultProps = {
  title: 'Lation',
}

export default AppLayout
