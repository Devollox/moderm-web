import React, { useLayoutEffect } from 'react'

import Page from 'components/page'
import getPosts from '@lib/get-posts'
import Information from '@components/information'
import HoverButton from '@components/hover-button'
import { useCopyToClipboard } from 'usehooks-ts'
import CardCareer from '@components/card-career'
import { useTheme } from 'next-themes'

import { Copy, ImageDown } from 'lucide-react'
import { career as career } from '@data/career.json'

export const getStaticProps = () => {
  const posts = getPosts()
  return { props: { posts } }
}

const About = () => {
  const [copiedText, copy] = useCopyToClipboard()
  const { systemTheme } = useTheme()

  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        console.log('Copied!', { text })
      })
      .catch(error => {
        console.error('Failed to copy!', error)
      })
  }

  return (
    <Page
      title='About'
      description='About me'
    >
      <Information title='Create. Share. Repeat.' />
      <div className='c-jkdSvk'>
        <p>
          <strong>Hey, I'm Devollox</strong>
          I started programming back in 2015, but in the end it was only by 2022 that
          I began to master the basics of the language at a good level.
        </p>
        <p>I'm an ordinary programmer <strong>(coder)</strong> who implements what I want.
          I can write a small program for the web and also for <strong>microprocessor architecture</strong>.
          I'm currently studying to become a <strong>semi-electrical engineer</strong>.
        </p>
        <p>
          I love the <strong>dark theme</strong> and <strong>optimization</strong>.
          I love Coca-Cola very much, but I think I’m also <strong>schizophrenic</strong>.
          I love <strong>Astronomy</strong>.
        </p>
      </div>
      <h2 style={{ marginTop: `60px`, marginBottom: '0' }}>Bio</h2>
      <blockquote>
        <p>
          Devollox comes from Russia. I started studying Pascal ABC and 1C. Realizing that programming this path to
          calculation and creativity remains for further study, but in the end I got burned out and requested this
          matter. In 2022, I paid attention to WebStorm and continued to study React. After learning React and
          JavaScript, continue learning Next.js. Now I'm studying at an engineering college to become a technical
          semi-engineer. Slowly I began to study the micro architecture of microprocessors. I love Astronomy and
          Philosophy.
        </p>
      </blockquote>
      <p style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <a
          style={{ textDecoration: 'none' }}
          onClick={handleCopy("Devollox comes from Russia. I started studying Pascal ABC and 1C. Realizing that programming this path to calculation and creativity remains for further study, but in the end I got burned out and requested this matter. In 2022, I paid attention to WebStorm and continued to study React. After learning React and JavaScript, continue learning Next.js. Now I'm studying at an engineering college to become a technical semi-engineer. Slowly I began to study the micro architecture of microprocessors. I love Astronomy and Philosophy.")}
        >
          <HoverButton image={<Copy height={24} width={24} />} title="Copy Bio" />
        </a>
        <span
          style={{ margin: "0 20px 0 10px" }}
        >
          •
        </span>
        <a
          download=""
          role="button"
          href={`https://www.devolllox.fun/favicons/${!systemTheme || systemTheme === 'dark' ? 'white-fav.png' : 'dark-fav.png'}`}
          style={{ textDecoration: 'none' }}
        >
          <HoverButton image={<ImageDown height={24} width={24} />} title="Download Headshot" />
        </a>
      </p>
      <h2 style={{ marginTop: `60px`, marginBottom: '0' }}>Career</h2>

      {career.map(items => {
        return (
          <CardCareer title={items.title} organization={items.organization} city={items.city}
                      startDate={items.startDate} endDate={items.endDate} />
        )
      })}

    </Page>
  )
}

export default About
