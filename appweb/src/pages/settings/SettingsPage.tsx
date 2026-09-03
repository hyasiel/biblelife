import { useEffect, useState } from "react";
import Footer from "../../shared/layout/components/Footer"
const imgsrc = "https://wallpapers.com/images/featured/cool-profile-pictures-87h46gcobjl5e4xu.jpg"
const username = "Yasiel"
import { IconFlameFilled } from '@tabler/icons-react';
export default function SettingsPage() {

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
        <main className="flex flex-col justify-normal h-dvh">
            <section className="profile flex flex-col items-center mt-8 gap-4">
                <div className="userphoto overflow-hidden flex-1">
                    <img className="w-20 rounded-full select-none" src={imgsrc}/>
                </div>
                <p className="username select-none font-medium text-xl">{username}</p>
                <hr className="border w-1/2"/>
            </section>
            <section className="accountsummary flex flex-col flex-1 items-center justify-center gap-6">
                <p className="font-light">RACHA</p>
                <div className="inforacha flex gap-1">
                    <span className="rachacounter">{racha}</span>
                    <IconFlameFilled className="fill-amber-300 stroke-red-500"/>
                </div>
                <div className="infoverses flex flex-col gap-6">
                    <button className="favoriteverses p-2 border shadow rounded border-gray-400">Versiculos Favoritos</button>
                    <button className="savedverdes p-2 border border-gray-400 shadow rounded">Versiculos Guardados</button>
                </div>
            </section>
            <div className="logout-container flex-1 flex justify-center items-center">
                <button className="logout p-2.5 border shadow-2xl border-gray-600 w-[65%] rounded-full">Cerrar Sesión</button>
            </div>
            
            <Footer/>
        </main>
    )   
} 