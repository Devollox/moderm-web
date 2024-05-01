---
title: Moving from React to Next.js
description: I deleted the project from React and switched to Next.js.
slug: nextjs-react
date: May 1, 2024
---

Ohh.... Where do I want to start? Oh, yes... Why did I rewrite my site to `Next.js`. Next.js I chose for a reason, I have already written one website on it, and I liked its architecture. `SSR` - is probably the thing that attracted me.

Server rendering (SSR, from English server side rendering) is the generation of the HTML code of the entire page on the server in response to a request. It avoids additional data requests from the client and provides fast first rendering and first meaningful rendering. 
As you might understand, writing a website on the server side is much more difficult, you don't have a `document` as such. You have to get around using `useEffect` and stuff like that.

```javascript
export const getStaticProps = async () => {
  await getPosts()
  await generateRssFeed()
  const data = {}

  return { props: { data } }
}
```
One example is `SSR`. Sometimes I think that's why it's so complicated. Who does not know that in order for this method to work, you need to return some kind of props.

`getStaticProps`
> If you export a function called getStaticProps (Static Site Generation) from a page, Next.js will pre-render this page at build time using the props returned by getStaticProps.

`getStaticPaths`

> If a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.
When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

`getServerSideProps`
> getServerSideProps is a Next.js function that can be used to fetch data and render the contents of a page at request time.

All these tools allow you to create and implement ideas on the server side.

It is more difficult, of course, but not more difficult than Dark souls 3. Another reason for choosing `SEO` is optimization. And Router pages. I think I will continue to study Next.js .
