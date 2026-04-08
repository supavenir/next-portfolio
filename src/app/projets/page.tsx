import Link from "next/link";
import Projet from "@/models/Projet";
import {request} from "@/services/HttpService";
import {API_URLS} from "@/constants/API_URLS";


export default async function ProjetsPage() {
    const projets=await request<Projet[]>(API_URLS.projets.all,"GET")
    return (
        <>
            <h1>Projets ({projets.length})</h1>
            <ul>
                {projets.map((projet)=>{
                    return(
                        <li key={projet.id}>
                            <Link href={`projets/${projet.id}`}>
                                {projet.titre}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}