import {useRef, useEffect, type SyntheticEvent, useState} from "react";

import { bibleBooks } from "../data/bibleBooks";
import BibleList from "./BibleList";


interface IBookSelectorModal {
    isOpenBook: boolean;
    onCloseBook(): void;
    setBook: (book: string)=>void;
    setSelection: (selection:{book: string, chapter: number})=>void;
}


export default function BookSelectorModal ({isOpenBook, onCloseBook, setBook, setSelection}: IBookSelectorModal) {


    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [selectedBook, setSelectedBook] = useState<string | null>(null);

    

useEffect(()=>{
    const dialog: HTMLDialogElement | null = dialogRef.current;

    if(!dialog) return;

    if (isOpenBook) {
        dialog.show();
    
    } else {
        dialog.close();
    }
},[isOpenBook])


const handleCancel = (e: SyntheticEvent)=>{
    e.preventDefault();
    onCloseBook();
}


const toogleBook = (title: string) => {
    setSelectedBook(prev => (prev === title ? null : title));
}

const oldTestament = bibleBooks.filter(book=>book.testament === "old")
const newTestament = bibleBooks.filter(book=>book.testament === "new")


return (
    <>
        <dialog ref={dialogRef} onCancel={handleCancel} className="bg-gray-100 w-5/6 h-3/4 overflow-y-scroll self-center justify-self-center justify-center text-center rounded-2xl shadow-2xl absolute">
            <h2>BOOKS</h2>
            <br />

            {/* contenedor de los libros general */}
            <div className=" pl-3.5 books flex flex-col gap-1">

                
                <BibleList testament={oldTestament} onClose={onCloseBook} selectedBook={selectedBook} toogleBook={toogleBook} setBook={setBook} setSelection={setSelection}/>

                <hr/>

                <BibleList testament={newTestament} onClose={onCloseBook} selectedBook={selectedBook} toogleBook={toogleBook} setBook={setBook} setSelection={setSelection}/>

            </div>

            

            <button onClick={onCloseBook}>
                Cerrar
            </button>
        </dialog>
    </>
)

}