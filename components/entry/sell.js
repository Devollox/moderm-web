import React, { useLayoutEffect } from 'react'
import styles from '@components/entry/work.module.scss'

import { AppWindowMac, Cpu, Mic, Mouse, Monitor } from 'lucide-react'

const SellImage = ({ imageInt }) => {
  return (
    <>
    {imageInt === 'microphone' ? <>
      <Mic />
    </> : (imageInt === 'mouse' ? <>
      <Mouse />
    </> : (imageInt === 'cpu' ? <>
        <Cpu />
      </> : (imageInt === 'monitor' ? <>
        <Monitor />
      </> : <></>)
      ))}
    </>
  )
}
export default SellImage