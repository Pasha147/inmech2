"use client"

import { useState } from "react"
import { INewsMassage } from "../lib/definitions"
import { CreateNewsForm } from "./crNewsForm";
  

export default function ExForm( {news}:{news:INewsMassage[]}) {
    const [isForm, setIsForm]=useState(false)
    const [isSaving, setIsSaving]=useState('')
    
    return (
        <>
            <button
                className="btn"
                onClick={()=>setIsForm(prev=>!prev)}
            >Create news</button>
            <h2>{`${isSaving}`}</h2>
            {
             isForm && <CreateNewsForm setIsSaving={setIsSaving}/>

            }
        </>
    )
}