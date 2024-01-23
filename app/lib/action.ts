
'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';

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
console.log(date, title, text);


await sql`
INSERT INTO news (date, title, text)
        VALUES (${date}, ${title}, ${text})
        ON CONFLICT (id) DO NOTHING;
`;

// const date1 = new Date().toISOString().split('T')[0];


// await sql`
//     INSERT INTO invoices (customer_id, amount, status, date)
//     VALUES (${customerId}, ${amountInCents}, ${status}, ${date1})
//   `;


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