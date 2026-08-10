import Footer from "../../shared/layout/components/Footer"
import {useState, type EventHandler} from "react";
import BibleHeader from "../../modules/bible/components/BibleHeader";
import BookSelectorModal from "../../modules/bible/components/BookSelectorModal";

export default function BiblePage () {

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);

    const [bookNameState, setBookNameState] = useState("GENESIS");
    const [versionBookState, setVersionBookState] = useState("RV60");


    return (
    <>
        <BibleHeader 
        isOpenAdvice={isBookModalOpen} 
        onClose={()=> setIsBookModalOpen(false)} 
        onOpenBookModal={()=>setIsBookModalOpen(true)} 
        bookName={bookNameState} 
        versionBook={versionBookState} 
        />
    


        <BookSelectorModal isOpen={isBookModalOpen} onClose={()=> setIsBookModalOpen(false)} setBook={(book)=>setBookNameState(book)}/>
        <Footer/>
    </>
    )
}