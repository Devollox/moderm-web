import React, { useLayoutEffect } from 'react'

import Page from '@components/page'
import getPosts from '@lib/get-posts'
import Information from '@components/information'
import Changelog from '@components/сhangelog'
import List from '@components/сhangelog/list'

import { book as book } from '@data/reading.json'
import { video as video } from '@data/reading.json'
import { other as other } from '@data/reading.json'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}
const Reading = () => {
  return (
    <Page
      title='Reading'
      description='Collection of articles, blog posts, and videos that I enjoyed.'
    >
      <Information title='Read. Understand. Create.'>
        I don’t really like to <strong>read</strong>, but there are still good <strong>books</strong> that I
        use to study. But in the end, I’m unlikely to finish reading it. I love <strong>science fiction</strong> very
        much. All the time I read <strong>{book.length + 1}</strong> books.
      </Information>
      <h2 style={{ marginTop: `60px`, marginBottom: '0'}}>Book</h2>
      <Changelog>
        <List title="Clean Code" position="none"/>
        {book.map(item => {
          return (
            <List title={item.title} href={item.href}/>
          )
        })}
      </Changelog>
      <h2 style={{ marginTop: `60px`, marginBottom: '0'}}>Video</h2>
      <Changelog>
        <List title="Learned programming for 365 days" href="https://www.youtube.com/watch?v=YYI5v48VuKE&ab_channel=HoneyMontana" position="none"/>
        {video.map(item => {
          return (
            <List title={item.title} href={item.href}/>
          )
        })}
      </Changelog>
      <h2 style={{ marginTop: `60px`, marginBottom: '0'}}>Other</h2>
      <Changelog>
        <List title="Draw an S-Curve" href="" position="none"/>
        {other.map(item => {
          return (
            <List title={item.title} href={item.href}/>
          )
        })}
      </Changelog>
    </Page>
  )
}

export default Reading
