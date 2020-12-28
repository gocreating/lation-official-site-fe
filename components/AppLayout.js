import Head from 'next/head'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { GoogleAdSenseHeader, GoogleAdSenseAdUnit, adUnitIdMap } from '../components/GoogleAdSense'
import { i18n, Link } from '../i18n'
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
      <Navbar collapseOnSelect expand="sm">
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Lation Logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link onClick={() => i18n.changeLanguage('en')}>English</Nav.Link>
            <Nav.Link onClick={() => i18n.changeLanguage('zh-TW')}>中文</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_converter_index_banner} />
    </>
  )
}

AppLayout.defaultProps = {
  title: 'Lation',
}

export default AppLayout