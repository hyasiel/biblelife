import img from "../../../assets/bbinit.png"
export default function DailyVerse () {
    return(
        <section className="verse_day flex flex-col justify-center items-center gap-7">
            <h3 className="self-baseline mb-3">Versiculo del dia</h3>
            <blockquote className="">
                <p>“Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna”</p>
                <div>— <cite>juan 3:16</cite></div>
            </blockquote>
            <hr />
            <div className="img_container flex flex-col justify-center self-center mt-7">
                <img src={img} alt="" />
            </div>
        </section>
    )
}