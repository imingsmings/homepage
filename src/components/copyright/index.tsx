import React, { memo } from 'react'
import styles from './index.module.scss'
import Police from '../../assets/images/police.png'

function CopyRight() {
  return (
    <div className={styles.copyright}>
      <a
        className={styles.police}
        target={'_blank'}
        rel={'noreferrer'}
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61011302001425"
      >
        <img src={Police} alt={''} />
        <span>陕公网安备: 61011302001425号</span>
      </a>
      <p className={styles.icp}>ICP备案号: 陕ICP备2022003201号-1</p>
    </div>
  )
}

export default memo(CopyRight)
