'use client';

import classes from '@/app/ui/crNewsForm.module.css'
import { createNews } from '../lib/action';

export function CreateNewsForm() {
    return (
        <form
            action={createNews}
            className={classes.createForm}
        >
            <h2 className={classes.h2}>Create news</h2>
            <label
                htmlFor="date"
                className={classes.label}
            >
                Date
            </label>
            <input
                id="date"
                name="date"
                type="text"
                placeholder="dd/mm/YYYY"
                className={classes.dateInp}
            />
            <label
                htmlFor="title"
                className={classes.label}
            >
                Title
            </label>
            <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                className={classes.titleInp}
            />
            <label
                htmlFor="text"
                className={classes.label}
            >
                Text
            </label>
            <textarea
                id="text"
                name="text"
                className={classes.textArea}
                placeholder="Text"
            ></textarea>
            <button
            type="submit"
            className={classes.submitBtn}>Create news</button>
        </form>
    )
}