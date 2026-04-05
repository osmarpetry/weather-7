import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Weather Observatory</title>
        <link rel="icon" type="image/svg+xml" href="/icons/icon.svg" />
        <link rel="icon" sizes="32x32" href="/icons/favicon-32.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#143a62" />
        <meta
          name="description"
          content="A cinematic weather observatory powered by the National Weather Service."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
