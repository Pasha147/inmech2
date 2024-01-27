
import { fetchNewsB } from '../lib/action';
import Image from 'next/image';

export default async function NewsArticles() {

    const news = await fetchNewsB()

    return (
        news.map((nw) => {
            return (
                <div key={`news ${nw.id}`}>
                    {/* <p>{`id: ${nw.id}`}</p> */}
                    <p>{`date: ${nw.date}`}</p>
                    <p>{`title: ${nw.title}`}</p>
                    <Image
                            src={`/img/${nw.img}`}
                            width={300}
                            height={92}
                            // priority={true}
                            // className={}
                            // style={{
                            //     height: '100px',
                            //     objectFit: 'contain', // cover, contain, none
                            // }}
                            // className="hidden md:block"
                            alt="Logo"
                        />
                    <p>{`img: ${nw.img}`}</p>
                    <p>{`text: ${nw.text}`}</p>
                    <hr />
                </div>
            )
        })
    )
}