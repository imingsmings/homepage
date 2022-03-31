import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Modal, Input, message } from 'antd'
import styles from './index.module.scss'
import MenuSVG from '../../assets/images/menu.svg'
import SearchSVG from '../../assets/images/search1.svg'
import DeleteSVG from '../../assets/images/close.svg'

interface headerProps {
  title: string
}
function Header(props: headerProps) {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const history = useHistory()
  const [active, setActive] = useState<boolean>(false)
  useEffect(() => {
    if (!isModalVisible) setKeyword('')
  }, [isModalVisible])
  const _onClick = () => {
    setActive(!active)
  }
  const _handleOk = () => {
    if (keyword === 'imings1125') {
      setIsModalVisible(false)
      history.push('./news')
    } else {
      message.error('指令不对哟...', 1).then()
    }
  }
  const _handleQuestion = () => {
    if (history.location.pathname !== '/news') {
      setIsModalVisible(true)
    }
  }
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.top}>
          {!active && (
            <li className={styles.menu} onClick={_onClick}>
              <img src={MenuSVG} alt="" />
            </li>
          )}
          {active && (
            <li className={styles.menu} onClick={_onClick}>
              <img src={DeleteSVG} alt="" />
            </li>
          )}
          <li className={styles.logo}>{props.title}</li>
          <li className={styles.search}>
            <img src={SearchSVG} alt="" />
          </li>
        </ul>
        <ul className={`${styles.nav} ${active ? styles.show : ''}`}>
          <li onClick={() => history.push('/home')}>Home</li>
          <li onClick={_handleQuestion}>Questions</li>
        </ul>
      </div>
      <Modal
        closable={false}
        visible={isModalVisible}
        onOk={_handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Input
          type={'password'}
          placeholder={'input accessing key'}
          onChange={e => setKeyword(e.target.value)}
          value={keyword}
        />
      </Modal>
    </>
  )
}

export default Header
