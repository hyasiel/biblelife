import { IconHeart, IconDownload } from '@tabler/icons-react';

export default function InfoVerses(){
    return (
    <>
        <section className="hidden md:flex md:items-center md:justify-center">
            <div className="fastinfo md:flex flex-col items-center md:w-85 lg:w-110 h-[85%] lg:h-full md:rounded-2xl md:shadow-custom">
                <span className="md:flex-2 relative md:top-10 font-bold">Información Rapida</span>
                <div className="actions_container md:flex-3 flex md:flex-col md:gap-8">
                    <button className="flex gap-2 bg-[#FFBCBC] md:p-1 lg:p-2 md:pl-14 md:pr-14 lg:pl-18 lg:pr-18  md:rounded-2xl">
                        <IconHeart stroke={2}/>
                        <span>Favoritos</span>
                    </button>
                    <button className="flex gap-2 bg-[#ACD4D4] md:p-1 lg:p-2 md:pl-14 md:pr-14 lg:pl-18 lg:pr-18  md:rounded-2xl">
                        <IconDownload stroke={2} />
                        <span>Guardados</span>
                    </button>
                </div>
            </div>
        </section>       
    </>
    )
}