import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status, children }) => {
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

            <footer>
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

                <footer>
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
    </Page>
  )
}

export default Error
