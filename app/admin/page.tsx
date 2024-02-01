import Image from 'next/image'
import styles from '@/app/admin/admin.module.css'
import { CreateNewsForm } from '../ui/crNewsForm'
import { fetchNewsB, deleteNews, editNewsId } from '../lib/action';
import Link from 'next/link';
import { signOut } from '@/auth';
import { redirect } from 'next/dist/server/api-utils';
import { useState } from 'react';
import ExForm from '../ui/exForm';

export default async function Admin() {

  // "use client"
  // const [isCrForm, setCrForm]= useState(true)

  // "use server"

  const news = await (await fetchNewsB()).reverse()

  return (
    <div className='container'>
      <h1 className={styles.h1}>Admin page</h1>

      <ExForm news={news}/>

      <form
      className={styles.signOutBtn}
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className='btn' >

          Sign Out
        </button>
      </form>

      {/* <CreateNewsForm /> */}
      {
        news.map((nw) => {
          const deleteNewsId = deleteNews.bind(null, nw.id)
          const editNewsIdB = editNewsId.bind(null, nw.id)

          return (
            <div key={`news ${nw.id}`}>
              <p>{`id: ${nw.id}`}</p>
              <p>{`date: ${nw.date}`}</p>
              <p>{`title: ${nw.title}`}</p>
              <p>{`img: ${nw.img}`}</p>
              <p>{`text: ${nw.text}`}</p>
              <form action={deleteNewsId}>
                <button
                  className='btn'
                  type='submit'>Del</button>
              </form>
              {/* <Link
                href={`/admin/${nw.id}/editNews`}
                className="rounded-md border p-2 hover:bg-gray-100"
              >
               Edit
              </Link> */}
              <form action={editNewsIdB}>
                <button
                  className='btn'
                  type='submit'
                >Edit</button>
              </form>
              <hr />
            </div>
          )
        })
      }

    </div>
  )
}
