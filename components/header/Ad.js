import Link from 'next/link'
import styles from './styles.module.scss'
import React from 'react'

const Ad = () => {
  return (
    <Link href='/browse'>
      <div className={styles.ad}></div>
    </Link>
  )
}

export default Ad
