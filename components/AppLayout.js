import Head from 'next/head'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit, adUnitIdMap } from './GoogleAdSense'
import Navigation from './Navigation'
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
      <Navigation />
      {children}
      <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_index_banner} />
    </>
  )
}

AppLayout.defaultProps = {
  title: 'Lation',
}

export default AppLayout