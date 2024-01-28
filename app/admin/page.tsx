import Image from 'next/image'
import styles from '@/app/admin/admin.module.css'
import { CreateNewsForm } from '../ui/crNewsForm'
import { fetchNewsB } from '../lib/action';
import { deleteNews } from '../lib/action';
import Link from 'next/link';
import { signOut } from '@/auth';

export default async function Admin() {

  const news = await fetchNewsB()

  return (
    <div className='container'>
      <h1 className={styles.h1}>Admin page</h1>

      <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button >
            
            Sign Out
          </button>
        </form>

      <CreateNewsForm />
      {
        news.map((nw) => {
          const deleteNewsId = deleteNews.bind(null, nw.id)

          return (
            <div key={`news ${nw.id}`}>
              <p>{`id: ${nw.id}`}</p>
              <p>{`date: ${nw.date}`}</p>
              <p>{`title: ${nw.title}`}</p>
              <p>{`img: ${nw.img}`}</p>
              <p>{`text: ${nw.text}`}</p>
              <form action={deleteNewsId}>
                <button type='submit'>Del</button>
              </form>
              <Link
                href={`/${nw.id}/editNews`}
                className="rounded-md border p-2 hover:bg-gray-100"
              >
               Edit
              </Link>
              <hr />
            </div>
          )
        })
      }

    </div>
  )
}
