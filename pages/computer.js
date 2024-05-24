import Page from '@components/page'
import getPosts from '@lib/get-posts'

export const getStaticProps = () => { const posts = getPosts(); return { props: { posts } }}
const Computer = () => {
  return (
    <Error status={400}>

    </Error>
  )
}

export default Computer
