"use client"

import { useEffect, useState } from "react"
import { INewsMassage } from "../lib/definitions"
import { CreateNewsForm } from "./crNewsForm";
  

export default function ExForm( {news}:{news:INewsMassage[]}) {
    const [isForm, setIsForm]=useState(false)
    
    return (
        <>
            <button
                className="btn"
                onClick={()=>setIsForm(prev=>!prev)}
            >Create news</button>
            {
             isForm && <CreateNewsForm/>

            }
        </>
    )
}