export default function ChapterList ({chapters, onClose, setVerse}: {chapters: number, onClose: ()=>void, setVerse(args:number):void}) {
    return (
        <>
        {[...Array(chapters)].map((_,index)=>{
                            return(
                                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{

                                    onClose();
                                    setVerse(index+1);
                                }}>
                                    {index+1}
                                </li>
                                
                            )
                        })}
        </>
    )
}