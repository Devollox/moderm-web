import React, { useLayoutEffect } from 'react'
import styles from '@components/entry/work.module.scss'

const WorkEntry = ({ title, underTitle, children, description, image, href, margin, imageInt }) => {
  return (
    <a
      href={href}
      target='_blank'
      className={styles.link_work}
      title={`${title} - ${description}`}
    >
      <span className={styles.span} style={{ height: '130px', marginBottom: `${margin}` }}>
        <div className={styles.image_work}>
          <div className={styles.image_work_} style={{ color: 'var(--fg)' }}>
            {image}
          </div>
        </div>
        <div className={styles.wrapper_work}>
          <p className={styles.title_work}>{title} <abbr className={styles.description_work}>{underTitle}</abbr></p>
          <p className={styles.description_work}>{description}</p>
          {children}
        </div>
      </span>
    </a>
  )
}
export default WorkEntry