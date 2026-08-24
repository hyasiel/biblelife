export default function ChapterList ({chapters, onClose, setChapter}: {chapters: number, onClose: ()=>void, setChapter(args:number):void}) {
    return (
        <>
        {[...Array(chapters)].map((_,index)=>{
                            return(
                                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{

                                    onClose();
                                    setChapter(index+1);
                                }}>
                                    {index+1}
                                </li>
                                
                            )
                        })}
        </>
    )
}