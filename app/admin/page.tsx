import Image from 'next/image'
import styles from '@/app/admin/admin.module.css' 
import { CreateNewsForm } from '../ui/crNewsForm'

export default function Admin() {
  return (
    <div className='container'>
     <h1 className={styles.h1}>Admin page</h1>
     <CreateNewsForm/>
    </div>
  )
}
