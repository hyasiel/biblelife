import Footer from "../../shared/layout/components/Footer"
const imgsrc = "https://wallpapers.com/images/featured/cool-profile-pictures-87h46gcobjl5e4xu.jpg"
const username = "Yasiel"
import { IconFlameFilled } from '@tabler/icons-react';
export default function SettingsPage() {
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
                    <span className="rachacounter">1</span>
                    <IconFlameFilled className="fill-amber-300 stroke-red-500"/>
                </div>
                <div className="infoverses flex flex-col">
                    <button className="favoriteverses">Versiculos Favoritos</button>
                    <button className="savedverdes">Versiculos Guardados</button>
                </div>
            </section>
            <button className="logout justify-self-end flex-1">Cerrar Sesión</button>
            <Footer/>
        </main>
    )   
} 