export default async function ProjetPage({params}:{params:Promise<{id:number}>}){
    const {id}=await params;
    return (
        <>
        <h1>Projet n°{id}</h1>
            <p>Détails du projet {id}</p>
        </>
    )

}