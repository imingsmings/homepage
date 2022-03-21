import React from 'react'
import NewsList from './components/NewsList'
import dataList from './data/data.json'
import '../../node_modules/antd/dist/antd.css'
import styles from './index.module.scss'

function News () {
  return (
    <div className={styles.news}>
      <NewsList newsList={dataList} />
    </div>
  )
}

export default News
