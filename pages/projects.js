import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Projects" description="Collection of past and present work.">
      <article>
        <Entry
          title="Devollox WebSite"
          description="I made a new website overnight, I really want to sleep!"
          image="https://www.finoit.com/wp-content/uploads/2022/09/java-coding-best-practices.jpg"
          href="https://devollox.fun/"
        />
      </article>
    </Page>
  )
}

export default Projects
