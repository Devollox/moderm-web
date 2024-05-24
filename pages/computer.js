import Page from '@components/page'
import getPosts from '@lib/get-posts'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}
const Computer = () => {
  return (
    <Page
      title="About"
      description="My short biography."
    >
    </Page>
  )
}

export default Computer
