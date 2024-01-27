
import styles from '@/app/(home)/home.module.css';
import NewsArticles from '../ui/newsArticles';
import { Suspense } from 'react';
import SkelNewsArticles from '../ui/skeletons';


export default async function Home() {

  return (
    <div className='container'>
      <h1>{'Новини'}</h1>
      <Suspense fallback={<SkelNewsArticles />}>
         <NewsArticles/>
      </Suspense>
    </div>
  )
}


