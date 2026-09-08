import img from "../../../assets/bbinit.png"
export default function DailyVerse () {
    return(
        <section className="justify-around gap-10 verse_day flex flex-col items-center pr-3 pl-3 sm:gap-9 ">
            <h3 className="self-baseline w-full mb-1.5 text-xl text-left md:text-right md:pr-10 font-bold">Versiculo del dia</h3>
            <blockquote className="text-[16px] md:text-[18px] lg:text-[20px] text-left md:text-right md:pr-10 lg:pl-10">
                <p className="md:mb-6">“Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna”</p>
                <div>— <cite className="text-[14px] md:text-[16px] lg:text-[18px]">juan 3:16</cite></div>
            </blockquote>
            <hr className="hidden md:inline md:w-full lg:w-[85%]"/>
            <div className=" verse-img_container overflow-hidden rounded-2xl h-50 sm:h-70 w-[85%] mt-4 md:h-45 lg:h-65 lg:w-[75%]">
                <img src={img} alt="" className="w-full h-full object-cover"/>
            </div>
        </section>
    )
}