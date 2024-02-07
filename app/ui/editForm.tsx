
// import { fetchNewsById } from "@/app/lib/action";
import classes from './editForm.module.css'
import { editNews } from "@/app/lib/action";
// import { notFound } from 'next/navigation';
import { INewsMassage } from "../lib/definitions"




export default function EditForm({curNews}:{curNews:INewsMassage}) {

    // const id = params.id;
    // const news = await fetchNewsById(id)
    

    // if (!news) {
    //     console.log('news-->',news)
    //     notFound();
    // }

    
    const updateNewsWithId = editNews.bind(null, curNews.id);

    return (
        <div className={classes.editForm}>
           <form
                action={updateNewsWithId}
                // className={classes.editForm}
            >
                <h2 className={classes.h2}>Edit current news</h2>
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
                    defaultValue={curNews.date}
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
                    defaultValue={curNews.title}
                />
                <label
                    htmlFor="img"
                    className={classes.label}
                >
                    img
                </label>
                <input
                    id="img"
                    name="img"
                    type="text"
                    placeholder="img"
                    className={classes.titleInp}
                    defaultValue={curNews.img}
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
                    defaultValue={curNews.text}
                ></textarea>
                <button
                    type="submit"
                    className={classes.submitBtn}>Seve news</button>
            </form>
        </div>
    )
}