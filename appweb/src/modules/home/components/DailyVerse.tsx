import img from "../../../assets/bbinit.png"
export default function DailyVerse () {
    return(
        <section className="justify-around gap-10 verse_day flex flex-col items-center pr-3 pl-3 sm:gap-9">
            <h3 className="self-baseline mb-1.5 text-xl">Versiculo del dia</h3>
            <blockquote className="text-xl">
                <p>“Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna”</p>
                <div>— <cite>juan 3:16</cite></div>
            </blockquote>
            <div className=" verse-img_container overflow-hidden rounded-2xl h-50 sm:h-70 w-[90%] mt-4">
                <img src={img} alt="" className="w-full h-full object-cover"/>
            </div>
        </section>
    )
}