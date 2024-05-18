import Page from 'components/home'
import React, { useLayoutEffect } from 'react'
import getPosts from '@lib/get-posts'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}

const About = () => {
  return (
    <Page>

    </Page>
  )
}

export default About
