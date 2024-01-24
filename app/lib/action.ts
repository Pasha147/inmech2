
'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';




const FormSchema = z.object({
    id: z.string(),
    date: z.string(),
    title: z.string(),
    text: z.string(),  
  });

const CreateNews = FormSchema.omit({ id: true});

export async function createNews(formData: FormData) {
const rawFormData={
    date: formData.get('date'),
    title: formData.get('title'),
    text: formData.get('text')
}

const { date, title, text } = CreateNews.parse(rawFormData);
// console.log(date, title, text);

await sql`
INSERT INTO news (date, title, text)
        VALUES (${date}, ${title}, ${text})
        ON CONFLICT (id) DO NOTHING;
`;

}

/*
CREATE TABLE news (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    text text NOT NULL
       );

 INSERT INTO news (date, title, text)
        VALUES ('ddd', 'fff', 'fff')
        ON CONFLICT (id) DO NOTHING;


DROP TABLE news;
*/


type NewsSchema={
    id: string
    date: string
    title: string
    text: string
}

export async function fetchNews(){
    noStore();
try{
    const data = await sql<NewsSchema>`SELECT * FROM news`;
    return data.rows;

}catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
}
}