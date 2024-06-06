import React from 'react'

import Page from '@components/page'
import getPosts from '@lib/get-posts'
import List from '@components/list'
import ListIndex from '@components/list/list'
import Information from '@components/information'

import { desk as desk } from '@data/computer.json'
import { computer as computer } from '@data/computer.json'
import { keyboard as keyboard } from '@data/computer.json'
import { mouse as mouse } from '@data/computer.json'
import { microphone as microphone } from '@data/computer.json'
import { coding as coding } from '@data/computer.json'
import { apps as apps } from '@data/computer.json'
import { services as services } from '@data/computer.json'

export const getStaticProps = () => {const posts = getPosts(); return { props: { posts } }}
const Computer = () => {
  return (
    <Page description='My config computer.'
                title='Computer'
    >
      <Information title="Tools. Apps. Gear.">
        I often change my computer and peripheral <strong>configuration</strong>.
        This is not a static page, it's a <strong>living document</strong> with everything that I'm using nowadays.
      </Information>
      <List
        listTitle="Computer"
      >
        {computer.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Desk"
      >
        {desk.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Mouse"
      >
        {mouse.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Keyboard"
      >
        {keyboard.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Microphone"
      >
        {microphone.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Coding"
      >
        {coding.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Apps"
      >
        {apps.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
      <List
        listTitle="Services"
      >
        {services.map(entry => {
          return (
            <ListIndex
              url="/"
              title={entry.title}
              description={entry.description}
            />
          )
        })}
      </List>
    </Page>
  )
}

export default Computer
