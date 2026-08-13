export default function ChapterList ({chapters, onClose}: {chapters: number, onClose: ()=>void}) {
    return (
        <>
        {[...Array(chapters)].map((_,index)=>{
                            return(
                                <li className="text-center p-1 w-8 bg-gray-200 rounded-md" onClick={()=>{
                                    onClose();
                                }}>
                                    {index+1}
                                </li>
                                
                            )
                        })}
        </>
    )
}