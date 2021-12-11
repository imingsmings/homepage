import React, { useState } from 'react'
// @ts-ignore
import useData from '@/store/global'
import style from '@/views/home/index.module.scss'

function Index () {
  const [count, setCount] = useState<number>(0)
  const { data, setData } = useData()

  const btnClick = () => {
    setCount(count + 1)
    setData(data + '1')
  }

  return (
    <div>
      <p className={style.p}>{count}</p>
      <button onClick={btnClick}>增加</button>
      <p>
        {data}
      </p>
    </div>
  )
}

export default Index
