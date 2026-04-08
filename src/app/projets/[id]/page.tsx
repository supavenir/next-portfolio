import {request} from "@/services/HttpService";
import {API_URLS} from "@/constants/API_URLS";
import Projet from "@/models/Projet";

export default async function ProjetPage({params}:{params:Promise<{id:number}>}){
    const {id}=await params;
    const projet=await request<Projet>(API_URLS.projets.one(id),"GET")
    return (
        <>
        <h1>{projet.titre}</h1>
            <p>{projet.description}</p>
            <div className="flex items-center gap-2">
                {
                    projet.technologies.map(tech=>{
                        return (
                            <span key={tech} className={"rounded bg-amber-600 px-2 py-1"}>
                            {tech}
                        </span>);
                    })
                }
            </div>
        </>
    )

}