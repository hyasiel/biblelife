import Footer from "../../shared/layout/components/Footer"
import Header from "../../shared/layout/components/Header"
import "./styles/main.css"
import Welcome from "../../modules/home/components/Welcome."
import DailyVerse from "../../modules/home/components/DailyVerse"




export default function HomePage (){

    //main page
    return (
        <>
            <Header/>
            <main className="">
                <Welcome/>
                <DailyVerse/>
            </main>
            <Footer/>      
        </>
    )
}