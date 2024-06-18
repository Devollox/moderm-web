import React from 'react'

import Page from '@components/page'
import getPosts from '@lib/get-posts'
import WorkEntry from '@components/entry/work'
import WrapperWork from '@components/entry/wrapwork'
import ListIndex from '@components/list/list'
import Information from '@components/information'

import { Heart, BriefcaseBusiness, GitMerge, ClipboardX } from 'lucide-react'
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
      <WrapperWork title="Featured Projects">
        <WorkEntry
          image={<Heart />}
          title='Modern'
          description='My personal website'
          href="https://github.com/Devollox/moderm-web"
        >
          <p className={styles.number}>2 Stars</p>
        </WorkEntry>
        <WorkEntry
          image={<BriefcaseBusiness />}
          title='Portfolio'
          description='Portfolio with Redis and Next'
          href="https://github.com/Devollox/portfolio-web"
        >
          <p className={styles.number}>124 VIEWS</p>
        </WorkEntry>
        <WorkEntry
          image={<GitMerge />}
          title='Chronark'
          description='Personal website chronark.com'
          href="https://github.com/chronark/chronark.com"
        >
          <p className={styles.number}>648 Stars</p>
        </WorkEntry>
        <WorkEntry
          image={<ClipboardX />}
          title='Rich  Presence'
          description='Discord gaming activity'
          href="https://github.com/Devollox/discord-rich-presence"
        >
          <p className={styles.number}>15 VIEWS</p>
        </WorkEntry>
      </WrapperWork>
      <h2 style={{ marginTop: '60px', marginBottom: '0'}}>All Projects</h2>
      <div>
        <h3>2024</h3>
        <ListIndex
          url="https://github.com/chronark/chronark.com"
          title="Chronark"
        />
        <ListIndex
          url="https://github.com/Devollox/portfolio-web"
          title="Modern Portfolio"
        />
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
