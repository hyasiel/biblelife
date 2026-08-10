import {useRef, useEffect, type SyntheticEvent} from "react";


interface IBookSelectorModal {
    isOpen: boolean;
    onClose(): void;
    setBook: (book: string)=>string;
}


export default function BookSelectorModal ({isOpen, onClose, setBook}: IBookSelectorModal) {


    const dialogRef = useRef<HTMLDialogElement | null>(null);


    const books1 = [
    "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio",
    "Josué", "Jueces", "Rut", "1 Samuel", "2 Samuel",
    "1 Reyes", "2 Reyes", "1 Crónicas", "2 Crónicas", "Esdras",
    "Nehemías", "Ester", "Job", "Salmos", "Proverbios",
    "Eclesiastés", "Cantares", "Isaías", "Jeremías", "Lamentaciones",
    "Ezequiel", "Daniel", "Oseas", "Joel", "Amós",
    "Abdías", "Jonás", "Miqueas", "Nahúm", "Habacuc",
    "Sofonías", "Hageo", "Zacarías", "Malaquías"
]

    const books2 = [
    "Mateo", "Marcos", "Lucas", "Juan", "Hechos", "Romanos",
    "1 Corintios", "2 Corintios", "Gálatas", "Efesios", "Filipenses",
    "Colosenses", "1 Tesalonicenses", "2 Tesalonicenses", "1 Timoteo", "2 Timoteo",
    "Tito", "Filemón", "Hebreos", "Santiago", "1 Pedro",
    "2 Pedro", "1 Juan", "2 Juan", "3 Juan", "Judas",
    "Apocalipsis"
    ]

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

return (
    <>
        <dialog ref={dialogRef} onCancel={handleCancel} className="bg-gray-100 w-5/6 h-3/4 overflow-y-scroll self-center justify-self-center justify-center text-center rounded-2xl shadow-2xl absolute">
            <h2>BOOKS</h2>
            <br />

            <div className=" pl-3.5 books flex flex-col gap-1 items-start">
                {books1.map((e)=>{
                    return(<button className="hover:bg-gray-200 p-2 flex w-full active:bg-gray-200" onClick={()=>setBook(e)}>{e}</button>)
                })}

                <hr/>

                {books2.map((e)=>{
                    return(<button className="hover:bg-gray-200 p-2 flex w-full active:bg-gray-200" onClick={()=>setBook(e)}>{e}</button>)
                })}
            </div>

            

            <button onClick={onClose}>
                Cerrar
            </button>
        </dialog>
    </>
)
    
}