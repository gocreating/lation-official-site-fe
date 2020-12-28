import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { i18n, withTranslation, Link } from '../i18n'

const Navigation = ({ t }) => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
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
        <Nav className="mr-auto">
          <Link href="/products" passHref>
            <Nav.Link>{t('navbar.products')}</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Navbar.Text>
            <FontAwesomeIcon icon={faGlobe} />
          </Navbar.Text>
          <Nav.Link onClick={() => i18n.changeLanguage('en')}>English</Nav.Link>
          <Nav.Link onClick={() => i18n.changeLanguage('zh-TW')}>中文</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Navigation.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Navigation)