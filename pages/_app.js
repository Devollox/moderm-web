import React from 'react'
import Router from 'next/router'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', () => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

import '@styles/global.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}
export default MyApp
