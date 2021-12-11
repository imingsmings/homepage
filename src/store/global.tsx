import { useState } from 'react'
import { createModel } from 'hox'

function useData () {
  const [data, setData] = useState<string>('hello')
  return {
    data,
    setData
  }
}

export default createModel(useData)
