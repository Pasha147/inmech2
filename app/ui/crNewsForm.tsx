"use client";

import classes from "@/app/ui/crNewsForm.module.css";
import { createNewsB } from "../lib/action";
import { useState} from "react";

export function CreateNewsForm({setIsSaving}:{setIsSaving:Function}) {
 
//   const [isSaving, setIsSaving]=useState('')
 const date = new Date().toISOString().split("T")[0];


  async function act(formData: FormData) {
  
 setIsSaving('Saving')
    await createNewsB(formData);
    setIsSaving('Saved')
   
  }

  return (
    <>
      
      <form action={act} className={classes.createForm}>
        <h2 className={classes.h2}>Create news</h2>
        <label htmlFor="date" className={classes.label}>
          Date
        </label>
        <input
          id="date"
          name="date"
          type="text"
          placeholder="dd/mm/YYYY"
          className={classes.dateInp}
          defaultValue={date}
        />
        <label htmlFor="title" className={classes.label}>
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Title"
          className={classes.titleInp}
          required
        />
        <label htmlFor="img" className={classes.label}>
          img
        </label>
        <input
          id="img"
          name="img"
          type="text"
          placeholder="img"
          className={classes.titleInp}
        />
        <label htmlFor="text" className={classes.label}>
          Text
        </label>
        <textarea
          id="text"
          name="text"
          className={classes.textArea}
          placeholder="Text"
          required
        ></textarea>
        <button type="submit" className="btn">
          Save news
        </button>
      </form>
    </>
  );
}
