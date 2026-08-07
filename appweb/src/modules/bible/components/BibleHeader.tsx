import React, {useState} from "react";
import BookSelectorModal from "./BookSelectorModal";
export default function BibleHeader () {


    const [bible_version, set_bible_version] = useState('NVI');
    const [bible_book, set_bible_book] = useState('JUAN');
    
    return (
        <React.Fragment>
            <header className="flex flex-col">
                <h1 className="app_title">BIBLELIFE</h1>
                <div className="verse_selector flex bg-gray-100 max-w-fit rounded-br-2xl rounded-r-2xl">
                    <button className="version p-1 pl-2 pr-2">{bible_version}</button>
                    <button className="book bg-gray-300 p-1 pl-2 pr-2 rounded-br-2xl rounded-r-2xl" onClick={BookSelectorModal}>{bible_book}</button>
                </div>
            </header>
        </React.Fragment>
    )
}