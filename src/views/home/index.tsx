import React, { useEffect, useState } from 'react'
import useData from '../../store/global'
import styles from './index.module.scss'
import { getLoginCaptcha } from '../../service'

function Home () {
  const [count, setCount] = useState<number>(0)
  const { data, setData } = useData()

  useEffect(() => {
    getLoginCaptcha().then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  const btnClick = () => {
    setCount(count + 1)
    setData(data + '1')
  }

  return (
    <div>
      <p className={styles.text}>{count}</p>
      <button onClick={btnClick}>增加</button>
      <p>
        {data}
      </p>
    </div>
  )
}

export default Home
