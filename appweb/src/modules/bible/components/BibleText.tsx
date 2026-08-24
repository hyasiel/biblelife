import React from "react";

interface IBibleText {
    verseAndText: {verse: number; text: string}[]
    bookName: string;
    chapterBook: number;
}

export default function BibleText ({verseAndText, bookName, chapterBook}: IBibleText){
    return (
        <React.Fragment>
            <div className="selectedText self-center flex flex-col text-center">
                <span>{bookName}</span>
                <span>Cap. {chapterBook}</span>
            </div>
            <div className="p-4">
            {verseAndText.map(({verse, text})=>(
                <span className="font-sans text-xl text-gray-800"><strong className="text-xs align-text-top font-bold text-black ">{verse}. </strong>{text}</span>
            ))}
            </div>
        </React.Fragment>
    )
}