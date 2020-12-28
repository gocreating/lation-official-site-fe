import App from 'next/app'
import { appWithTranslation } from '../i18n'
import '../styles/global.css'

const LationApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

LationApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(LationApp)