import type { IBibleBook } from "../data/bibleBooks";
import ChapterList from "./ChapterList";

interface IBibleList {
    testament: IBibleBook [];
    onClose: ()=>void;
    selectedBook: string | null;
    setBook: (arg: string)=>void;
    toogleBook: (arg: string)=>void;
    setSelection: (selection: {book: string, chapter: number})=>void;
}

export default function BibleList({testament, onClose, selectedBook, setBook, toogleBook, setSelection}: IBibleList) {

    return(
    testament.map((e: IBibleBook)=>{

                    const isVisible = selectedBook ===e.id;

                    return(
                    //lista padre que contiene cada libro
                    <div className="books_selector p-2 w-full flex flex-col text-start items-start gap-1.5">
                        
                        
                        <button onClick={()=> {toogleBook(e.id); setBook(e.title);}} className="books_name hover:bg-gray-200 active:bg-gray-200">{e.title}</button>
                        
                        {/* lista que contiene todos los versiculos */}
                        <ul hidden={!isVisible} className="caps_list flex flex-row gap-2 flex-wrap w-full justify-baseline">
                            {/* se crea un array con el numero de capitulos de el libro actual y luego lo recorremos para obtener la cantidad de elementos asignados (esto se traduce a la cantidad de versiculos de cada libro) */}
                        <ChapterList chapters={e.chapters} onClose={onClose} bookName={e.id} setSelection={setSelection}/>

                        </ul>
                    
                    </div>)
                })

    )
}