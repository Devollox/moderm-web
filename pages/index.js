import Page from 'components/home'
import styles from '@components/home/page.module.css'
import React, { useLayoutEffect } from 'react'
import Command from '@components/command'
import getPosts from '@lib/get-posts'
import generateRssFeed from '@lib/rss'
import path from 'path'

export const getStaticProps = async () => { await getPosts();await generateRssFeed();const data = {};
  return { props: { data }}
}
const About = () => {

  useLayoutEffect(() => {
    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
      }
    })
  }, [])

  return (
    <>
      <Page
        description="Hello, my name is Devollox, and I am a programmer who values creativity and optimization.">
        <div className={styles.wrapper_main}>
          <div className={styles.wrapper_text}>
            <div>
              <h1>Devollox</h1>
              <p>
                <strong>Front-end &amp; Technical <a href="/about">semi-engineer</a></strong>
                <br />Obsessed with the Internet</p>
              <Command variantStyle=""
                       variantKey="false"
                       variant={
                <div className={styles.button}>Press <kbd>ctrl</kbd> <kbd>K</kbd> to start
                  <svg viewBox="0 0 24 12"
                              width="20" height="20"
                              fill="currentColor"
                  >
                    <path d="M20 11.603c0-.335-.147-.687-.376-.907l-5.303-5.304c-.262-.261-.572-.392-.867-.392-.727 0-1.209.498-1.209 1.16 0 .376.155.662.384.883l1.863 1.863 1.684 1.56-1.757-.097H5.283c-.768 0-1.283.498-1.283 1.234 0 .735.515 1.225 1.283 1.225h9.136l1.765-.09-1.692 1.553-1.863 1.855c-.22.229-.384.515-.384.883 0 .662.482 1.168 1.21 1.168.294 0 .596-.13.857-.384l5.312-5.311c.229-.221.376-.572.376-.9z" />
                  </svg>
                </div>
              } />
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default About
