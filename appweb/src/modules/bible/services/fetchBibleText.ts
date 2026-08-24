

export async function fetchBibletext(chapter: number, book: string){
    await fetch("http://localhost:3000/getBook", {
        method: "POST",
        body: JSON.stringify({
            bb: "en-rv",
            b: book,
            c: chapter,
            v: "1",
        }),
        headers: {"Content-Type": "application/json"}
    })
    .then((res)=> res.json())
    .then((data)=>{console.log(data)});
}