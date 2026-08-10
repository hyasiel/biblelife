import React from "react"

interface IBibleHeader {
    onOpenBookModal(): void;
    isOpenAdvice: boolean;
    onClose(): void;
    bookName: string;
    versionBook: string;
}

export default function BibleHeader ({onOpenBookModal, isOpenAdvice, onClose, bookName, versionBook}: IBibleHeader) {


    return (
        <React.Fragment>
            <header className="flex flex-col">
                <h1 className="app_title">BIBLELIFE</h1>
                <div className="verse_selector flex bg-gray-100 max-w-fit rounded-br-2xl rounded-r-2xl">
                    <button className="version p-1 pl-2 pr-2">{versionBook}</button>
                    <button className="book bg-gray-300 p-1 pl-2 pr-2 rounded-br-2xl rounded-r-2xl" onClick={(!isOpenAdvice) ? onOpenBookModal : onClose}>{bookName}</button>
                </div>
            </header>
        </React.Fragment>
    )
}