import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import AppLayout from '../components/AppLayout'
import { withTranslation } from '../i18n'

const HomePage = ({ t }) => {
  return (
    <AppLayout>
      <Jumbotron>
        <h1>Lation</h1>
        <p>{t('introduction')}</p>
      </Jumbotron>
    </AppLayout>
  )
}

HomePage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(HomePage)