import React, { memo, useLayoutEffect } from 'react'
import styles from './hover-button.module.css'
import { Copy } from 'lucide-react'

const HoverButton = ({ title, image }) => {
  return (
    <button className={styles.btn}>
      <div className={styles.image}>{image}</div>
      <strong>{title}</strong>
    </button>
  )
}


export default HoverButton
