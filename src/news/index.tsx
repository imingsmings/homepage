import React, { useEffect, useState } from 'react'
import NewsList from './components/NewsList'
import dataList from './data/data.json'
import '../../node_modules/antd/dist/antd.css'
import styles from './index.module.scss'

function News() {
  const list = [
    'You are doing incredible things.',
    'You are the best.',
    'Just go for it!',
    'We can achieve it.',
    'Youth means limitless possibilities.',
    'Better late than never.',
    "It's all right.",
    "That's better. Keep trying.",
    '到达胜利之前，无法回头。'
  ]
  const len = list.length
  const [headerText, setHeaderText] = useState<string>(list[0])
  const _toggleHeaderText = () => {
    const randomIndex = Math.floor(Math.random() * len)
    setHeaderText(list[randomIndex])
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      _toggleHeaderText()
    }, 10000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <div className={styles.news}>
      <div className={styles.news_header}>
        <p onClick={_toggleHeaderText}>{headerText}</p>
      </div>
      <NewsList newsList={dataList} />
    </div>
  )
}

export default News
