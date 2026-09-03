import { useState, useEffect } from "react";
import "./styles/header.css"
import { IconFlameFilled } from '@tabler/icons-react';

export default function Header() {

    const [racha, setRacha] = useState<number | null>(null)
    
    useEffect(()=>{
        //fetch data
        async function fetchDataRacha(){
            const response = await fetch("http://localhost:3000/u/racha");
            const data = await response.json();
            setRacha(data.racha);
        }
    
        fetchDataRacha();
    
    },[])

    return (
        <header>
            <nav>
                <h1 className="app_title">BIBLELIFE</h1>
                <div className="racha"><span>{racha}</span><IconFlameFilled/></div>
            </nav>
        </header>
    )
}