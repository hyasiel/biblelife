import Footer from "../../shared/layout/components/Footer"
import Header from "../../shared/layout/components/Header"
import "./styles/main.css"
import Welcome from "../../modules/home/components/Welcome"
import DailyVerse from "../../modules/home/components/DailyVerse"
import InfoVerses from "../../modules/home/components/InfoVerses"



export default function HomePage (){

    //main page
    return (
        <>
            <main className="h-dvh">
                <Header onHideRacha={false}/>
                <Welcome/>
                <div className="versecontainer md:grid md:grid-cols-2">
                    <InfoVerses/>
                    <DailyVerse/>
                </div>
                
                <Footer/>
            </main>
                  
        </>
    )
}