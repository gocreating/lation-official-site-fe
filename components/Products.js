import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row'
import { event } from '../utils/gtag'

const Products = ({ t, style }) => {
  return (
    <Container style={style}>
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
                <Button
                  variant="secondary"
                  size="lg"
                  style={{ minWidth: '2rem' }}
                  onClick={() => event({ action: 'click converter' })}
                >
                  {t('visit')}{' '}<FontAwesomeIcon icon={faExternalLinkAlt} />
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

export default Products