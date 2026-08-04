import Footer from "../../shared/layout/components/Footer"
import Header from "../../shared/layout/components/Header"
import "./styles/main.css"
import img from "../../assets/bbinit.png"

import {IconNotebook, IconHeart} from '@tabler/icons-react';


export default function HomePage (){

    //main page
    return (
        <>
            <Header/>
            <main className="">
               <section className="welcome_section">
                <time dateTime="2026-04-30">abr 29, 2026</time>
                <h2 className="welcome_text">Bienvenido</h2>
                <div className="actions">
                    <button aria-label="Accion 1">
                        <IconNotebook stroke={2} />
                    </button>
                    <button aria-label="Accion 2">
                        <IconHeart stroke={2}/>
                    </button>
                </div>
                </section>
                <article className="verse_day">
                    <h3>Versiculo del dia</h3>
                    <blockquote>
                        <p>“Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna”</p>
                         <div>— <cite>juan 3:16</cite></div>
                    </blockquote>    
                </article>
                <hr className=""/>
                <section className="img_day_section ">
            
                    <div className="img_container">
                        <img src={img} alt="" />
                    </div>
                    
                </section>
            </main>
            <Footer/>      
        </>
    )
}