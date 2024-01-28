
'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const FormSchemaB = z.object({
    id: z.string(),
    date: z.string(),
    title: z.string(),
    img: z.string(),
    text: z.string(),
});

const CreateNewsB = FormSchemaB.omit({ id: true });

export async function createNewsB(formData: FormData) {
    const rawFormData = {
        date: formData.get('date'),
        title: formData.get('title'),
        img: formData.get('img'),
        text: formData.get('text')
    }

    const { date, title, img, text } = CreateNewsB.parse(rawFormData);
    // console.log(date, title, text);

    await sql`
        INSERT INTO newsb (date, title, img, text)
        VALUES (${date}, ${title}, ${img}, ${text})
        ON CONFLICT (id) DO NOTHING;
            `;

    revalidatePath('/admin');

}



/*
CREATE TABLE news (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    text text NOT NULL
       );
       
CREATE TABLE newsB (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    img varchar(255) NOT NULL,
    text text NOT NULL
       );

 INSERT INTO news (date, title, text)
        VALUES ('ddd', 'fff', 'fff')
        ON CONFLICT (id) DO NOTHING;


DROP TABLE news;
*/



type NewsSchemaB = {
    id: string
    date: string
    title: string
    img: string
    text: string
}

export async function fetchNewsB() {
    noStore();
    try {
        const data = await sql<NewsSchemaB>`SELECT * FROM newsb`;
        return data.rows;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}
export async function deleteNews(id: string) {

    console.log('id->', id);

    await sql`DELETE FROM newsb WHERE id = ${id}`;

    revalidatePath('/admin');
    revalidatePath('/');
}

export async function fetchNewsById(id: string) {
    noStore();
    try {
        const data = await sql<NewsSchemaB>`
          SELECT
          newsb.id,
          newsb.date,
          newsb.title,
          newsb.img,
          newsb.text
          FROM newsb
          WHERE newsb.id = ${id};         
        `;
        return data.rows[0];
    } catch (error) {
        console.error('Database Error---:', error);
        throw new Error('Failed to fetch invoice.');
    }
}

// Use Zod to update the expected types
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });


export async function editNews(id: string, form: FormData) {
    const rawForm = {
        date: form.get('date'),
        title: form.get('title'),
        img: form.get('img'),
        text: form.get('text'),
    }
    const { date, title, img, text } = CreateNewsB.parse(rawForm);


    await sql`
    UPDATE newsb
    SET id = ${id}, date = ${date}, title = ${title}, img = ${img}, text = ${text}
    WHERE id = ${id}
  `;

    revalidatePath('/admin');
    redirect('/admin');

}


//===================================================

/*
const FormSchema = z.object({
    id: z.string(),
    date: z.string(),
    title: z.string(),
    text: z.string(),
});

const CreateNews = FormSchema.omit({ id: true });

export async function createNews(formData: FormData) {
    const rawFormData = {
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
*/