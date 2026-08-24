import Footer from "../../shared/layout/components/Footer"
import {useEffect, useState} from "react";
import BibleHeader from "../../modules/bible/components/BibleHeader";
import BookSelectorModal from "../../modules/bible/components/BookSelectorModal";
import BibleText from "../../modules/bible/components/BibleText";
import { fetchBibletext } from "../../modules/bible/services/fetchBibleText";


export default function BiblePage () {

    const [isBookModalOpen, setIsBookModalOpen] = useState(false);
    const [bookNameState, setBookNameState] = useState<string>("Genesis");
    const [versionBookState] = useState("en-rv");
    const [currentText, setCurrentText] = useState([]);
    const [selection, setSelection] = useState({book: "genesis", chapter: 1})

    useEffect(()=>{
        //al detectar cambios en el los versiculos hacemos fetch.
        const loadBibleText = async () => {
        const data = await fetchBibletext(selection.chapter, selection.book, versionBookState);
        console.log(data.data)

        //se crea array mas simple en base al original para pasar como parametro
        const verseAndText = data.data.map((element)=>{return {verse: element.verse, text: element.text}});
        setCurrentText(verseAndText);
    }

    loadBibleText();
    
    }, [selection, versionBookState])

    

    return (
    <>
        <BibleHeader 
        isOpenBookAdvice={isBookModalOpen} 
        onCloseBook={()=> setIsBookModalOpen(false)} 
        onOpenBookModal={()=>setIsBookModalOpen(true)} 
        bookName={bookNameState} 
        versionBook={versionBookState}
        
        />
    


        <BookSelectorModal isOpenBook={isBookModalOpen} onCloseBook={()=> setIsBookModalOpen(false)} setBook={(book)=>setBookNameState(book)} setSelection={(selectionData)=>setSelection(selectionData)}/>

        <BibleText verseAndText={currentText} chapterBook={selection.chapter} bookName={bookNameState}/>
        

        <Footer/>
    </>
    )
}