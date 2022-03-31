import React from 'react'
import styles from './index.module.scss'
import Header from '../../components/header'

const Home = () => {
  return (
    <div className={styles.home}>
      <Header title={'遇明不散'} />
      <div className={styles.content}>
        <p>Amazing things will happen.</p>
        <p>Coming soon.</p>
        <p>Jason Wang</p>
      </div>
    </div>
  )
}

export default Home
