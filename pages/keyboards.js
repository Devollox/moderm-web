import Page from '@components/page'
import Entry from '@components/entry'
import getPosts from '@lib/get-posts'

import { data as items } from '@data/keyboards.json'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}
const Keyboards = () => {
  return (
    <Page
      title="Keyboards"
      description="Collection of beautiful 60%, 65%, and TKL keyboards."
      variant="true"
    >
      <article>
        {items.map(entry => {
          return (
            <Entry
              key={`${entry.title}-${entry.url}`}
              title={entry.title}
              image={entry.image}
              href={entry.url}
              description={entry.description}
            />
          )
        })}
      </article>
    </Page>
  )
}


export default Keyboards
