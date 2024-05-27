import Head from 'next/head'
import Page from '@components/page'
import styles from './error.module.css'
import Encoding from 'components/encoding'

const Error = ({ status, children }) => {
  Encoding(25, "effects")

  return (
    <Page title={status || 'Error'}>
      <Head>
        <title>{status} — Devollox</title>
      </Head>


      {status === 404 ?
        <>
          <h1>This page cannot be found.</h1>

          <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
            <p>
              It doesn’t exist, it never has. I’m nostalgic for a place that
              never existed.
            </p>

            <footer id="effects">
              — Aaron Swartz{' '}
            </footer>
          </blockquote>
        </>
        : (status === 400 ?
            <>
              <h1>This page is under development.</h1>

              <blockquote cite="http://www.aaronsw.com/weblog/visitingmit">
                <p>
                  When I'm working on a task, I don't think about beauty. I only think about how to solve the problem. But when the finished solution doesn't look pretty, I know it's wrong.
                </p>

                <footer id="effects">
                  — Buckminster Fuller{' '}
                </footer>
              </blockquote>
            </>
            :
            <section className={styles.section}>
              <span>{status || '?'}</span>
              <p>An error occurred.</p>
            </section>
        )
      }
      <main>{children}</main>
    </Page>
  )
}

export default Error
