import React, { useEffect, useState } from 'react'
import useData from '../../store/global'
import styles from './index.module.scss'
import { userNormalLogin } from '../../service'

function Home () {
  const [count, setCount] = useState<number>(0)
  const { data, setData } = useData()

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const data:Account.NormalLoginParams = {
      email: 'imings@qq.com',
      password: '12345'
    }
    userNormalLogin(data).then((res:any) => {
      console.log(res)
    }).catch((error:any) => {
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
