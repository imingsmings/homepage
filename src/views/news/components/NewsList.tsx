import React, { useEffect, useState } from 'react'
import RadioBox from './RadioBox'

function NewsList (props:any) {
  const [list, setList] = useState([])

  useEffect(() => {
    const renderList = props.newsList
    setList(renderList)
  }, [])

  return (
    <>
      {list.length !== 0 &&
        list.map((item:any, index) => (
          <RadioBox item={item} key={item.id} index={index + 1} />
        ))}
    </>
  )
}

export default NewsList
