import React, { useState } from 'react'
import NewsList from './components/NewsList'
import dataList from './data/data.json'
import '../../node_modules/antd/dist/antd.css'
import styles from './index.module.scss'
import { Switch } from 'antd'

function News () {
  const [mode, setMode] = useState<string>('light')
  const _onModeChange = (mode: boolean) => {
    setMode(mode ? 'dark' : 'light')
  }
  const date = new Date()
  return (
    <div className={styles.news} data-theme={mode}>
      <div className={styles.news_header}>
        <p>{date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}</p>
        <p className={styles.mode}><span>黑暗模式</span><Switch onChange={_onModeChange}/></p>
      </div>
      <NewsList newsList={dataList} />
    </div>
  )
}

export default News
