import getPosts from '@lib/get-posts'
const fs = require('fs')
const RSS = require('rss')
const path = require('path')
const marked = require('marked')

export default function generateRssFeed() {
  const posts = getPosts()
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