import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import { withTranslation } from '../i18n'

const Products = ({ t, ...rest }) => {
  return (
    <Container {...rest}>
      <h2>{t('products.title')}</h2>
      <hr />
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="/static/images/product-converter.png" />
            <Card.Body>
              <Card.Title>
                {t('products.converter.title')}
              </Card.Title>
              <Card.Text>
                {t('products.converter.description')}
              </Card.Text>
              <a href="https://converter.lation.app/" target="_blank">
                <Button variant="secondary">
                  {t('visit')}{' '}
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} />
      </Row>
    </Container>
  )
}

Products.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Products)