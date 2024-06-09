import React from 'react'

import Page from '@components/page'
import getPosts from '@lib/get-posts'
import WorkEntry from '@components/entry/work'
import WrapperWork from '@components/entry/wrapwork'
import ListIndex from '@components/list/list'
import Information from '@components/information'

import { Heart } from 'lucide-react'
import styles from '@components/entry/work.module.scss'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}
const Projects = () => {
  return (
    <Page
      description='My projects.'
      title='Projects'
    >
      <Information title="Work. Hobby. Open Source.">
        I'm obsessed with side projects and<strong> building in public</strong>.
        Here you can navigate websites, apps, and libraries I built. Some projects are still active, others have been
        discontinued.
      </Information>
      <WrapperWork title="Featured Projects" gridColumns="1fr">
        <WorkEntry
          image={<Heart />}
          title='Modern'
          description='My personal website'
          href="https://github.com/Devollox/moderm-website"
        >
          <p className={styles.number}>2 Stars</p>
        </WorkEntry>
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
