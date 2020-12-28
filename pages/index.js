import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import AppLayout from '../components/AppLayout'
import Products from '../components/Products'
import { withTranslation } from '../i18n'

const HomePage = ({ t }) => {
  return (
    <AppLayout>
      <Jumbotron>
        <Container>
          <h1>Lation</h1>
          <p>{t('introduction')}</p>
        </Container>
      </Jumbotron>
      <Products t={t} />
    </AppLayout>
  )
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(HomePage)