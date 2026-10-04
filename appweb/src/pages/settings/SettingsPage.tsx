import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import Footer from "../../shared/layout/components/Footer"
import Header from "../../shared/layout/components/Header"

import { IconFlameFilled, IconNotebook, IconHeart } from '@tabler/icons-react';




export default function SettingsPage() {


    const imgsrc = "https://wallpapers.com/images/featured/cool-profile-pictures-87h46gcobjl5e4xu.jpg"
    const username = "Yasiel"
    const contact = "example@gmail.com"

    const [racha, setRacha] = useState<number | null>(null)

    const [isLogged, setIsLogged] = useState(false);
    
    useEffect(()=>{
        //fetch data
        async function fetchDataRacha(){
            const response = await fetch("http://localhost:3000/u/racha");
            const data = await response.json();
            setRacha(data.racha);

        
        }

        fetchDataRacha();

        // verify is user is logged
        //async function setLogged() {
        //    the cookies
        //}

    },[])


    return (
        <>
        <Header onHideRacha={true}/>
        <main className="flex flex-col justify-normal h-dvh">

            <section className="profile flex flex-col items-center gap-2 mb-5">

                <span className="profile_title self-baseline mt-2 mb-5 ml-5 pl-4 pr-4 p-0.5 bg-blue-300 rounded-full text-sm">
                    Mi Cuenta
                </span>

                <div className="userphoto overflow-hidden flex-1">
                    <img className="w-17 rounded-full select-none" src={imgsrc}/>
                </div>

                <p className="username select-none font-medium text-xl">{username}</p>

                <p className="contact text-gray-500">
                    {contact}
                </p>

                <br />


            </section>

            <section className="accountsummary flex flex-col flex-1 items-center justify-around gap-6 bg-gray-200 rounded-tl-3xl rounded-tr-3xl">

                <div className="inforacha flex gap-3 flex-col items-center">

                    <p className="font-light bg-amber-500 rounded-full  pr-3 pl-3 p-0.5 text-sm">RACHA</p>

                    <div className="racha_container flex">
                        <span className="rachacounter">{racha}</span>
                        <IconFlameFilled className="fill-amber-300 stroke-red-500"/>
                    </div>
                    
                </div>

                <div className="infoverses flex flex-col gap-6">
                    <button className="favoriteverses p-2 shadow rounded-xl bg-gray-50 flex gap-1.5">
                        <IconHeart stroke={2}/>
                        <span>Versiculos Favoritos</span>
                    </button>

                    <button className="savedverdes p-2 bg-gray-50 shadow rounded-xl flex gap-1.5">
                        <IconNotebook stroke={2}/>
                        <span>Versiculos Guardados</span>
                    </button>
                </div>
            </section>

            <div className="auth-container flex-1 flex flex-col justify-center items-center gap-2.5 bg-gray-200">

                {(isLogged) ? (
                    <button className="logout p-2.5 border shadow-2xl border-gray-600 w-[65%] rounded-full max-w-70">Cerrar Sesión</button>
                ) : (
                    <Link to="/login" className="login p-2.5 border shadow-2xl border-gray-600 w-[65%] rounded-full text-center max-w-70">
                        <button>Iniciar Sesion</button>
                    </Link>
                )}
                



            </div>
            
            <Footer/>
        </main>
        </>
    )   
} 