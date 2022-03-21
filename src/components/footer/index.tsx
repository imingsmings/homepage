import React, { memo } from 'react'
import styles from './index.module.scss'

function Footer () {
  return (
    <div className={styles.footer}>
      底部
    </div>
  )
}

export default memo(Footer)
