const fs = require('fs')
const RSS = require('rss')
const path = require('path')
const marked = require('marked')
const matter = require('gray-matter')

export default function generateRssFeed() {
  const posts = fs
    .readdirSync('./posts/')
    .filter(file => path.extname(file) === '.md')
    .map(file => {
      const postContent = fs.readFileSync(`./posts/${file}`, 'utf8')
      const { data, content } = matter(postContent)
      return { ...data, body: content }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const renderPost = md => marked(md)

  const feed = new RSS({
    title: 'Devollox',
    site_url: 'https://devollox.fun/',
    feed_url: 'https://devollox.fun/feed.xml',
    image_url: 'https://github.com/Devollox/Devollox-Website/blob/main/public/logo512.png',
    language: 'en'
  })

  posts.forEach(post => {
    const url = `https://devollox.fun/blog/${post.slug}`

    feed.item({
      title: post.title,
      description: renderPost(post.body),
      date: new Date(post.date),
      author: 'Devollox',
      url,
      guid: url
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join('public/feed.xml'), rss)
}
