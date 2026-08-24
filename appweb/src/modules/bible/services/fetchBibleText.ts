

export async function fetchBibletext(chapter: number, book: string, version: string){
    const response = await fetch("http://localhost:3000/getBook", {
        method: "POST",
        body: JSON.stringify({
            bb: version,
            b: book,
            c: chapter,
        }),
        headers: {"Content-Type": "application/json"}
    })

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`)
    }

    const data = await response.json();
    return data;
}