import Head from 'next/head'
import Container from 'react-bootstrap/Container'
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
      </Head>
      <GoogleAdSenseHeader />
      <GoogleAnalyticsHeader />
      <Navigation />
      {children}
      <Container style={{ marginTop: '2rem' }}>
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_official_site_banner} />
      </Container>
    </>
  )
}

AppLayout.defaultProps = {
  title: 'Lation',
}

export default AppLayout