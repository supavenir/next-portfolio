import {NextRequest} from "next/server";
import {dataProjets} from "@/data/Projets";


export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }
) {
    const {id}= await params;
    const projet=dataProjets.filter(p=>p.id == id);
    return Response.json(projet);
}
