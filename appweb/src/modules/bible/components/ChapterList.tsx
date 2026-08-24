interface IChapterList {
    chapters: number, 
    onClose: ()=>void,
    bookName: string;
    setSelection: (selection: {book: string, chapter: number})=>void;
}

export default function ChapterList ({chapters, onClose, bookName, setSelection}: IChapterList) {
    return (
        <>
        {[...Array(chapters)].map((_,index)=>{
            return(
                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{ 
                    onClose();
                    setSelection({book:bookName, chapter: index+1})
                }}>
                    {index+1}
                </li>
                )
        })}
        </>
    )
}