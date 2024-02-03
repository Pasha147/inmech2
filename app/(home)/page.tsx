
import styles from '@/app/(home)/home.module.css';
import NewsArticles from '../ui/newsArticles';
import { Suspense } from 'react';
import SkelNewsArticles from '../ui/skeletons';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News',
}


export default async function Home() {

  return (
    <div className={styles.sectionHome +' container section'}>
      <h1>{'Новини'}</h1>
      <Suspense fallback={<SkelNewsArticles />}>
         <NewsArticles/>
      </Suspense>
    </div>
  )
}


