import React, { useLayoutEffect } from 'react'
import styles from '@components/entry/work.module.scss'

import { MemoryStick, Cpu, Mic, Mouse, Monitor, Keyboard } from 'lucide-react'

const SellImage = ({ imageInt }) => {
  return (
    <>
    {imageInt === 'microphone' ?
        <Mic />
      : (imageInt === 'mouse' ?
        <Mouse />
      : (imageInt === 'cpu' ?
        <Cpu />
      : (imageInt === 'monitor' ?
        <Monitor />
      : (imageInt === 'memory' ?
        <MemoryStick />
      : (imageInt === 'keyboard' ?
        <Keyboard />
      : <></>
      )))))
    }
    </>
  )
}
export default SellImage