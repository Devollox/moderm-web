import React, { memo } from 'react'
import Link from 'next/link'

import styles from './header.module.css'
import Command from '@components/command'
import { Code } from 'lucide-react';
import clsx from 'clsx';
import { Command as CommandIcon } from '@components/icons'
const Header = ({ title, content, variant}) => {
  return (
    <nav
         className={clsx(
           variant === "true"
             ? styles.nav_homepage
             : styles.nav_page,
         )}
    >
            <div
              className={clsx(
                variant === "true"
                  ? styles.header_homepage
                  : styles.header_page,
              )}>
              <Link legacyBehavior href="/">
                <a aria-label="Navigate Home" className={styles.logo}>
                  <Code size={32} color="var(--fg)" />
                </a>
              </Link>

                <Command variantStyle="true" variant={<CommandIcon />} />

              {title && <div className={styles.content}>{title}</div>}
            </div>
    </nav>
  )
}

Header.displayName = 'Header'
export default memo(Header)
