import styles from './list.module.scss'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const List = ({ title, href, position }) => {
  return (
  <>
    <div style={{borderTop: "1px solid var(--colors-hover)", display: `${position}`}} />
    <li className={styles.wrapper_block}>
      <a href={href} target='_blank' className={styles.wrapper_span}>
        <span className={styles.wrapper_content} data-projection-id='801'>
          <span className={styles.title}>{title}</span>
          <span className={styles.wrapper_icon}>
            <ArrowUpRight />
          </span>
        </span>
      </a>
    </li>
  </>
  )
}

export default List