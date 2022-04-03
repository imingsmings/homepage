import React from 'react'
import NewsList from './components/NewsList'
import dataList from './data/data.json'
import styles from './index.module.scss'
import Header from '../../components/header'

function News() {
  return (
    <div className={styles.news}>
      <Header title={'时政题库'} />
      <NewsList newsList={dataList} />
    </div>
  )
}

export default News
