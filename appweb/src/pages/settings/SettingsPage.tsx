import Footer from "../../shared/layout/components/Footer"

export default function SettingsPage() {
    return (
        <main>
            <section className="profile">
                <div className="userphoto">
                    <img src="none"/>
                </div>
                <p className="username"></p>
            </section>
            <section className="accountsummary">
                <div className="inforacha">
                    <p>RACHA</p>
                    <span className="rachacounter"></span>
                    <i className="svg"></i>
                </div>
                <div className="infoverses">
                    <button className="favoriteverses">Versiculos Favoritos</button>
                    <button className="savedverdes">Versiculos Guardados</button>
                </div>
            </section>
            <button className="logout">Cerrar Sesión</button>
            <Footer/>
        </main>
    )   
}