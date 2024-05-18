import Page from 'components/home'
import React, { useLayoutEffect } from 'react'
import getPosts from '@lib/get-posts'
import Error from '@components/error'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}

const About = () => {
  return (
    <Error status={400}>

    </Error>
  )
}

export default About
