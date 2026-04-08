import Link from "next/link";
import Projet from "@/models/Projet";


export default async function ProjetsPage() {
    const response=await fetch("http://localhost:3000/api/projets");
    const projets: Projet[]=await response.json();
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