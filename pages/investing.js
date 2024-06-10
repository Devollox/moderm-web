import React from 'react'
import styles from '@components/entry/work.module.scss'

import getPosts from '@lib/get-posts'
import Page from '@components/page'
import Information from '@components/information'
import WrapperWork from '@components/entry/wrapwork'
import WorkEntry from '@components/entry/work'
import ListIndex from '@components/list/list'
import SellImage from '@components/entry/sell'

import { AppWindowMac } from 'lucide-react'
import { sell as sell, videocard as videocard } from '@data/investing.json'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}

const About = () => {
  return (
    <Page
      title="Investing"
      description="Where do I work"
    >
      <Information title="DevTools. B2B. SaaS.">
        I mainly get my money through selling various goods on <strong>marketplace</strong> - {sell.reduce((total, card) => total + parseFloat(card.sell), 0)} sales. Sometimes I switch to normal work. I'm thinking of building a <strong>mining farm</strong> - {videocard.reduce((total, card) => total + parseFloat(card.mh), 0)} Mh/s.
      </Information>
      <h2 style={{ marginTop: '60px', marginBottom: '0'}}>Who took my money</h2>
      <p>I love doing this...</p>
      <div>
        <ListIndex
          selection="-"
          title="Sell Goods"
          description="Selling goods is the main type of income"
        />
        <ListIndex
          selection="-"
          title="Uses Repair"
          description="I rarely do this, but it's so interesting and very exciting"
        />
        <ListIndex
          selection="-"
          title="Work at the Factory"
          description="Sometimes I can go and work in a factory"
        />
      </div>
      <h2 style={{ marginTop: '60px', marginBottom: '0'}}>Most Sales</h2>
      <WrapperWork title="Featured Projects">
        {sell.map(item => {
          return (
            <WorkEntry
              image={<SellImage imageInt={item.image} />}
              title={item.title}
              description={item.description}
            >
              <p className={styles.number}>{item.sell} Sales</p>
            </WorkEntry>
          )
        })}
      </WrapperWork>
      <h2 style={{ marginTop: '60px', marginBottom: '0'}}>My Mining</h2>
      <WrapperWork title="Featured Projects" gridColumns="1fr">
        {videocard.map(item => {
          return (
            <WorkEntry
              image={<AppWindowMac />}
              title={item.title}
              underTitle={`- ${item.mh} Mh/s`}
            />
          )
        })}
      </WrapperWork>
    </Page>
  )
}

export default About