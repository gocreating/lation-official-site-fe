import { NextSeo, RecipeJsonLd } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import { FacebookMessengerHeader, FacebookMessengerChatPlugin } from './FacebookMessenger'
import { GoogleAnalyticsHeader } from './GoogleAnalytics'
import { GoogleAdSenseAdUnit } from './GoogleAdSense'
import Navigation from './Navigation'
import { withTranslation } from '../i18n'
import { adUnitIdMap } from '../utils/config'
import 'bootstrap/dist/css/bootstrap.min.css'

export const config = { amp: true }

const AppLayout = ({ t, children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{t('site.title')}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <NextSeo
        title={t('site.title')}
        description={t('site.description')}
        languageAlternates={[{
          hrefLang: 'en',
          href: `https://lation.app/en${router.pathname}`,
        }, {
          hrefLang: 'zh-TW',
          href: `https://lation.app/zh-TW${router.pathname}`,
        }]}
      />
      <RecipeJsonLd
        name={t('site.title')}
        description={t('site.description')}
        authorName="Lation"
        images={['https://lation.app/logo.png']}
        ingredients={[]}
        instructions={[]}
        keywords={t('site.keywords')}
      />
      <GoogleAnalyticsHeader />
      <FacebookMessengerHeader />
      <Navigation />
      {children}
      <Container style={{ marginTop: '2rem', marginBottom: '2rem', overflow: 'auto' }}>
        <GoogleAdSenseAdUnit adUnitId={adUnitIdMap.adunit_official_site_banner} />
      </Container>
      <FacebookMessengerChatPlugin />
    </>
  )
}

AppLayout.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

AppLayout.defaultProps = {
  title: 'Lation',
}

export default withTranslation('common')(AppLayout)
