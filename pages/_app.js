import React, { useLayoutEffect } from 'react'
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

import '@styles/global.scss'
import { ThemeProvider } from 'next-themes'
import Footer from '@components/footer'
import Error from '@components/error'

function MyApp({ Component, pageProps }) {
  useLayoutEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
      }
    })
  }, [])
  return (
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
  )
}
export default MyApp
