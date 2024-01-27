
import { fetchNewsById } from "@/app/lib/action";

export default async function Page({ params }: { params: { id: string } }){

    const id = params.id;
    const news= await fetchNewsById(id)
console.log('news-->',news)

    return(
        <div>
            <h1>Edit news article</h1>
            <p>{`id: ${id}`}</p>

        </div>
    )
}