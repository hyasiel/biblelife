import {useRef, useEffect, type SyntheticEvent, useState} from "react";

interface IBookSelectorModal {
    isOpen: boolean;
    onClose(): void;
    setBook: (book: string)=>void;
}


export default function BookSelectorModal ({isOpen, onClose, setBook}: IBookSelectorModal) {


    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [selectedBook, setSelectedBook] = useState<string | null>(null);

    const books1 = [
        { title: "Génesis", chapters: 50 },
        { title: "Éxodo", chapters: 40 },
        { title: "Levítico", chapters: 27 },
        { title: "Números", chapters: 36 },
        { title: "Deuteronomio", chapters: 34 },
        { title: "Josué", chapters: 24 },
        { title: "Jueces", chapters: 21 },
        { title: "Rut", chapters: 4 },
        { title: "1 Samuel", chapters: 31 },
        { title: "2 Samuel", chapters: 24 },
        { title: "1 Reyes", chapters: 22 },
        { title: "2 Reyes", chapters: 25 },
        { title: "1 Crónicas", chapters: 29 },
        { title: "2 Crónicas", chapters: 36 },
        { title: "Esdras", chapters: 10 },
        { title: "Nehemías", chapters: 13 },
        { title: "Ester", chapters: 10 },
        { title: "Job", chapters: 42 },
        { title: "Salmos", chapters: 150 },
        { title: "Proverbios", chapters: 31 },
        { title: "Eclesiastés", chapters: 12 },
        { title: "Cantares", chapters: 8 },
        { title: "Isaías", chapters: 66 },
        { title: "Jeremías", chapters: 52 },
        { title: "Lamentaciones", chapters: 5 },
        { title: "Ezequiel", chapters: 48 },
        { title: "Daniel", chapters: 12 },
        { title: "Oseas", chapters: 14 },
        { title: "Joel", chapters: 3 },
        { title: "Amós", chapters: 9 },
        { title: "Abdías", chapters: 1 },
        { title: "Jonás", chapters: 4 },
        { title: "Miqueas", chapters: 7 },
        { title: "Nahúm", chapters: 3 },
        { title: "Habacuc", chapters: 3 },
        { title: "Sofonías", chapters: 3 },
        { title: "Hageo", chapters: 2 },
        { title: "Zacarías", chapters: 14 },
        { title: "Malaquías", chapters: 4 }
    ];

    const books2 = [
        { title: "Mateo", chapters: 28 },
        { title: "Marcos", chapters: 16 },
        { title: "Lucas", chapters: 24 },
        { title: "Juan", chapters: 21 },
        { title: "Hechos", chapters: 28 },
        { title: "Romanos", chapters: 16 },
        { title: "1 Corintios", chapters: 16 },
        { title: "2 Corintios", chapters: 13 },
        { title: "Gálatas", chapters: 6 },
        { title: "Efesios", chapters: 6 },
        { title: "Filipenses", chapters: 4 },
        { title: "Colosenses", chapters: 4 },
        { title: "1 Tesalonicenses", chapters: 5 },
        { title: "2 Tesalonicenses", chapters: 3 },
        { title: "1 Timoteo", chapters: 6 },
        { title: "2 Timoteo", chapters: 4 },
        { title: "Tito", chapters: 3 },
        { title: "Filemón", chapters: 1 },
        { title: "Hebreos", chapters: 13 },
        { title: "Santiago", chapters: 5 },
        { title: "1 Pedro", chapters: 5 },
        { title: "2 Pedro", chapters: 3 },
        { title: "1 Juan", chapters: 5 },
        { title: "2 Juan", chapters: 1 },
        { title: "3 Juan", chapters: 1 },
        { title: "Judas", chapters: 1 },
        { title: "Apocalipsis", chapters: 22 }
    ];


    

useEffect(()=>{
    const dialog: HTMLDialogElement | null = dialogRef.current;

    if(!dialog) return;

    if (isOpen) {
        dialog.show();
    
    } else {
        dialog.close();
    }
},[isOpen])


const handleCancel = (e: SyntheticEvent)=>{
    e.preventDefault();
    onClose();
}


const toogleBook = (title: string) => {
    setSelectedBook(prev => (prev === title ? null : title));
}

return (
    <>
        <dialog ref={dialogRef} onCancel={handleCancel} className="bg-gray-100 w-5/6 h-3/4 overflow-y-scroll self-center justify-self-center justify-center text-center rounded-2xl shadow-2xl absolute">
            <h2>BOOKS</h2>
            <br />

            <div className=" pl-3.5 books flex flex-col gap-1">

                
                {books1.map((e)=>{

                    const isVisible = selectedBook ===e.title;
                    const trimmedString = selectedBook?.replaceAll(" ", "");

                    return(

                    <div className="book_selector p-2 w-full flex flex-col text-start items-start gap-1.5" 
                    onClick={()=>{
                        setBook(e.title);
                    }}
                    >
                        
                        <button onClick={()=> toogleBook(e.title)} className="books_name hover:bg-gray-200 active:bg-gray-200">{e.title}</button>
                        
                        <ul hidden={!isVisible} className="caps_list flex flex-row gap-2 flex-wrap w-full justify-baseline">

                        {[...Array(e.chapters)].map((_,index)=>{
                            return(
                                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{
                                    showOnConsole(trimmedString, index+1)
                                    onClose();
                                    
                                }}>
                                    {index+1}
                                </li>
                                
                            )
                        })}

                        </ul>
                        
                        
                            
                        
                        
                    
                    </div>)
                })}

                <hr/>

                {books2.map((e)=>{
                    const isVisible = selectedBook ===e.title;
                    const trimmedString = selectedBook?.replaceAll(" ", "");
                    
                    return(

                    <div className="book_selector p-2 w-full flex flex-col text-start items-start gap-1.5" onClick={()=>setBook(e.title)}>
                        
                        <button onClick={()=> toogleBook(e.title)} className="books_name hover:bg-gray-200 active:bg-gray-200">{e.title}</button>
                        
                        <ul hidden={!isVisible} className=" caps_list flex flex-row gap-2 flex-wrap w-full justify-baseline">

                        {[...Array(e.chapters)].map((_,index)=>{
                            return(
                                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{
                                    showOnConsole(trimmedString, index+1)
                                    onClose()
                                    }}>
                                    {index+1}
                                </li>
                                
                            )
                        })}

                        </ul>
                        
                        
                            
                        
                        
                    
                    </div>)
                })}

            </div>

            

            <button onClick={onClose}>
                Cerrar
            </button>
        </dialog>
    </>
)

function showOnConsole(sb: string | 
    undefined, sv: number | null){
    console.log(sb + " " + sv);
}
    
}