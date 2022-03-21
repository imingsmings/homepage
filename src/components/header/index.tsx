import React from 'react'
import { Switch } from 'antd'
import styles from './index.module.scss'

function Header () {
  const date = new Date()

  const _onChange = (state:boolean) => {
    const ele:any = document.querySelector('body')
    ele.setAttribute('data-theme', state ? 'dark' : 'light')
  }

  return (
    <div className={styles.header}>
      <span>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</span>
      <p><span>夜间模式</span><Switch onChange={_onChange} /></p>
    </div>
  )
}

export default Header
