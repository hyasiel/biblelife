import Footer from "../../shared/layout/components/Footer"
import {useEffect, useState} from "react";
import BibleHeader from "../../modules/bible/components/BibleHeader";
import BookSelectorModal from "../../modules/bible/components/BookSelectorModal";
import BibleText from "../../modules/bible/components/BibleText";
import { fetchBibletext } from "../../modules/bible/services/fetchBibleText";
import {bibleBooks} from "../../modules/bible/data/bibleBooks";


export default function BiblePage () {

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const [bookNameState, setBookNameState] = useState<string>("Filipenses");
    const [chapterNameState, setchapterNameState] = useState<number>(1)
    const [versionBookState, setVersionBookState] = useState("RV60");



    useEffect(()=>{
    //al detectar cambios en el los versiculos hacemos fetch.

    //obtenemos el id en base al nombre;
    const bookObj = bibleBooks.find(book=>book.title == bookNameState)
        if (bookObj == undefined) return;
        fetchBibletext(chapterNameState, bookObj.id);
    }, [chapterNameState])

    

    return (
    <>
        <BibleHeader 
        isOpenBookAdvice={isBookModalOpen} 
        onCloseBook={()=> setIsBookModalOpen(false)} 
        onOpenBookModal={()=>setIsBookModalOpen(true)} 
        bookName={bookNameState} 
        versionBook={versionBookState} 
        />
    


        <BookSelectorModal isOpenBook={isBookModalOpen} onCloseBook={()=> setIsBookModalOpen(false)} setBook={(book)=>setBookNameState(book)} setChapter={(chapter)=> setchapterNameState(chapter)}/>

        

        <Footer/>
    </>
    )
}