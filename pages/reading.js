import React, { useLayoutEffect } from 'react'

import Page from '@components/page'
import getPosts from '@lib/get-posts'
import Information from '@components/information'
import Entry from '@components/entry'

import { data as items } from '@data/book.json'

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
        I don’t really like to <strong>read</strong>, but there are still good <strong>books in videos</strong> that I
        use to study. But in the end, I’m unlikely to finish reading it. I love <strong>science fiction</strong> very
        much. All the time I read <strong>{items.length}</strong> books.
      </Information>
      <h2 style={{ marginTop: `60px` }}>Book</h2>
      {items.map((item) => {
        return (
          <Entry
            title={item.title}
            description={item.description}
            hours={`${item.hours} hours`}
            image={item.image}
            progress={item.progress}
          />
        )
      })}
    </Page>
  )
}

export default Reading
