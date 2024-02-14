'use client'
import cl from '@/app/ui/pagination.module.css'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({totalPage}:{totalPage:number}){
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
   
    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
      };

    
    return(
        <div className={cl.pag}>
            <Link 
            className={'btn '+cl.pag_btn}
            href={createPageURL(currentPage - 1)}
            >{'<'}</Link>
            <span>{'...'}</span>
            <Link 
            className={'btn '+cl.pag_btn}
            href={createPageURL(currentPage + 1)}
            >{'>'}</Link>
        </div>
    )
}