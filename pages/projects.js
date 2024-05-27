import Page from '@components/page'
import getPosts from '@lib/get-posts'
import Error from '@components/error'
import React from 'react'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}
const Projects = () => {
  return (
    <Error status={400}>

    </Error>
  )
}


export default Projects
