import React from "react";

interface IBibleText {
    verseAndText: {verse: number; text: string}[]
}

export default function BibleText ({verseAndText}: IBibleText){
    return (
        <React.Fragment>
            <div className="p-4">
            {verseAndText.map(({verse, text})=>(
                <span className="font-sans text-xl text-gray-800"><strong className="text-xs align-text-top font-bold text-black ">{verse}. </strong>{text}</span>
            ))}
            </div>
        </React.Fragment>
    )
}