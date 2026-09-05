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
        <header className="flex p-0 flex-col md:flex-row md:gap-3 w-full relative justify-between pr-6 pl-6">
                <h1 className="app_title text-center text-[18px]">BIBLELIFE</h1>

            <div className="flex gap-3 items-center">
                <nav className="">
                    <ul className="flex gap-2">
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
                <div className="racha flex gap-1.5 bg-gray-200 self-end md:self-center p-2 rounded-tl-lg rounded-bl-lg shadow md:bg-transparent md:shadow-none md:p-0">
                    <span className="text-[17px]">{racha}</span>
                    <IconFlameFilled className="fill-red-500"/>
                </div>
                <div className="imgcontainer md:justify-self-end">
                    <img src={imgsrc} alt="" className=" w-10 h-10 rounded-full hidden md:flex md:justify-self-end"/>
                </div>
                
            </div>
        </header>
    )
}