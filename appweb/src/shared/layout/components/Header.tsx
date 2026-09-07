import { useState, useEffect } from "react";
import "./styles/header.css"
import { IconFlameFilled } from '@tabler/icons-react';
import {Link} from "react-router-dom"
const imgsrc = "https://wallpapers.com/images/featured/cool-profile-pictures-87h46gcobjl5e4xu.jpg"

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
        <header className="flex p-0 flex-col md:flex-row md:gap-3 w-full md:justify-between md:pr-4 md:pl-4 md:p-1 md:items-center md:bg-gray-200">
                <h1 className="app_title text-center text-[13px]">BIBLELIFE</h1>

            <div className="flex items-center gap-3 relative h-7.5">
                <nav className="hidden mr-5 md:inline">
                    <ul className="flex gap-2 md:text-sm">
                        <li className="nav_items">
                            <Link to="/">
                                <button>
                                    <span className="">Home</span>
                                </button>
                            </Link>
                        </li>

                        <li className="nav_items">
                            <Link to="/bible">
                                <button>
                                    <span className="">Bible</span>
                                </button>
                            </Link>
                        </li>

                        <li className="nav_items">
                            <Link to="/settings">
                                <button>
                                    <span className="">Settings</span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="racha flex gap-1.5 bg-gray-200 absolute items-center md:relative right-0 md:self-center p-2 rounded-tl-lg rounded-bl-lg shadow md:bg-transparent md:shadow-none md:p-0 md:align-m">
                    <span className=" md:text-sm">{racha}</span>
                    <IconFlameFilled className="fill-amber-200 stroke-red-600 stroke-2 md:w-5"/>
                </div>
                <div className="imgcontainer md:justify-self-end">
                    <img src={imgsrc} alt="" className=" w-6 h-6 rounded-full hidden md:flex md:justify-self-end"/>
                </div>
                
            </div>
        </header>
    )
}