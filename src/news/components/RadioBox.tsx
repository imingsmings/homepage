import React, { useState } from 'react'
import { Radio, message } from 'antd'
import NewIcon from '../../assets/news/new.svg'
import styles from '../../assets/news/style.module.scss'

function RadioBox (props:any) {
  const [value, setValue] = useState('')
  const [item] = useState(props.item)
  const [insertValue, setInsertValue] = useState('')

  const _onChange = (e:any) => {
    const selectedValue = e.target.value
    setValue(selectedValue)
    if (selectedValue === item.rightOpt) {
      message.success('回答正确', 0.5).then()
      item.options.forEach((opt:any) => {
        if (opt.tag === item.rightOpt) {
          setInsertValue(opt.tag)
        }
      })
    } else {
      setInsertValue('')
    }
  }

  return (
    <div className={styles.radio_box}>
      {item && (
        <Radio.Group onChange={_onChange} value={value} key={item.id}>
          <p className={styles.title}>
            {props.index <= 20 && <img src={NewIcon} className={styles.icon} alt="" />}
            {item.id}. {item.title.match(/^.*\(/)[0].replace('(', '')}
            <span className={insertValue ? styles.active : ''}>
              ( {insertValue} )
            </span>
            {item.title.match(/\).*/)[0].replace(')', '')}
          </p>
          <div className={styles.selections}>
            {item.options.map((opt:any) => {
              return (
                <Radio value={opt.tag} key={`${opt.tag}${opt.desc}`}>
                  {opt.tag}.{opt.desc}
                </Radio>
              )
            })}
          </div>
        </Radio.Group>
      )}
    </div>
  )
}

export default RadioBox
