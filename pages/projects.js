import Page from '@components/page'
import getPosts from '@lib/get-posts'
import React from 'react'
import WorkEntry from '@components/entry/work'
import WrapperWork from '@components/entry/wrapwork'
import { Heart } from 'lucide-react'
import styles from '@components/list/list.module.css'
import ListIndex from '@components/list/list'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}
const Projects = () => {
  return (
    <Page description='My projects.'
          title='Projects'
    >
      <h1>Work. Hobby. Open Source.</h1>
      <p style={{ margin: '20px 0 20px 0' }}>I'm obsessed with side projects and<strong> building in public</strong>.
        Here you can navigate websites, apps, and libraries I built. Some projects are still active, others have been
        discontinued.</p>
      <h2 style={{ marginTop: '60px' }}>Featured Projects</h2>
      <WrapperWork>
        <WorkEntry image={<Heart />} title='Modern' description='My personal website' number='2 Stars' />

      </WrapperWork>
      <h2 style={{ marginTop: '60px', marginBottom: '0'}}>All Projects</h2>
      <div>
        <h3>2024</h3>
        <ListIndex
          url="https://github.com/Devollox/moderm-website"
          title="Modern WebSite"
        />
      </div>
      <div>
        <h3>2023</h3>
        <ListIndex
          url="https://github.com/Devollox/discord-rich-presence"
          title="Rich Presence Discord"
        />
      </div>
    </Page>
  )
}


export default Projects
