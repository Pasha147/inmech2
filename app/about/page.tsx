import Image from 'next/image'
import styles from '@/app/about/about.module.css' 
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return (
    <div className={styles.about}>About</div>
  )
}
