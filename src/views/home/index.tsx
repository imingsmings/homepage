import React from 'react'
import styles from './index.module.scss'
import Header from '../../components/header'

const Home = () => {
  return (
    <div className={styles.home}>
      <Header title={'遇明不散'} />
    </div>
  )
}

export default Home
