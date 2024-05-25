import Page from '@components/page'
import getPosts from '@lib/get-posts'
import List from '@components/list'
import ListIndex from '@components/list/list'

import { desk as desk } from '@data/computer.json'
import { computer as computer } from '@data/computer.json'
import { keyboard as keyboard } from '@data/computer.json'
import { coding as coding } from '@data/computer.json'
import Bruteforce from '@components/bruteforce'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}
const Computer = () => {
  return (
    <Page description='My config computer.'
                title='Computer'
    >
      <h1>Tools. Apps. Gear.</h1>
      <p style={{ margin: '20px 0 20px 0' }}>I often change my computer and peripheral <strong>configuration</strong>.
        This is not a static page, it's a <strong>living document</strong> with everything that I'm using nowadays.</p>
      <List
        listTitle="Computer"
      >
        {computer.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Desk"
      >
        {desk.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Keyboard"
      >
        {keyboard.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Coding"
      >
        {coding.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
    </Page>
  )
}

export default Computer
