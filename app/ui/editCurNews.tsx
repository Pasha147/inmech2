
"use client"

import { useEffect, useState } from "react"
import { INewsMassage } from "../lib/definitions"
import EditForm from "./editForm";

export default function EditCurNews ({curNews}:{curNews:INewsMassage}){
    const [isForm, setIsForm]=useState(false)
    
    return (
        <>
            <button
                className="btn"
                onClick={()=>setIsForm(prev=>!prev)}
            >Edit news</button>
            {
             isForm && <EditForm curNews={curNews}/>

            }
        </>
    )
}


  

