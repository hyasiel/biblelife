import Footer from "../../shared/layout/components/Footer"
import {useEffect, useState} from "react";
import BibleHeader from "../../modules/bible/components/BibleHeader";
import BookSelectorModal from "../../modules/bible/components/BookSelectorModal";
import BibleText from "../../modules/bible/components/BibleText";

export default function BiblePage () {

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const [bookNameState, setBookNameState] = useState<string>("Genesis");
    const [verseNameState, setVerseNameState] = useState<number>(1)
    const [versionBookState, setVersionBookState] = useState("RV60");


    useEffect(()=>{
        console.log(bookNameState + " " + verseNameState);
    }, [verseNameState])


    return (
    <>
        <BibleHeader 
        isOpenBookAdvice={isBookModalOpen} 
        onCloseBook={()=> setIsBookModalOpen(false)} 
        onOpenBookModal={()=>setIsBookModalOpen(true)} 
        bookName={bookNameState} 
        versionBook={versionBookState} 
        />
    


        <BookSelectorModal isOpenBook={isBookModalOpen} onCloseBook={()=> setIsBookModalOpen(false)} setBook={(book)=>setBookNameState(book)} setVerse={(verse)=> setVerseNameState(verse)}/>

        <BibleText/>

        <Footer/>
    </>
    )
}