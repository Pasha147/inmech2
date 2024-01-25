
import styles from '@/app/(home)/home.module.css';
import { fetchNewsB } from '../lib/action';

export default async function Home() {

  const news = await fetchNewsB()
  console.log("FN-> ",news);

  return (
    news.map((nw) => {

      return (
        <div key={`news ${nw.id}`}>
          <p>{`id: ${nw.id}`}</p>
          <p>{`date: ${nw.date}`}</p>
          <p>{`title: ${nw.title}`}</p>
          <p>{`img: ${nw.img}`}</p>
          <p>{`text: ${nw.text}`}</p>
          <hr/>
        </div>
      )
    })

  )
}


