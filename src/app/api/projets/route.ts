import {dataProjets} from "@/data/Projets";

export async function GET() {
    return Response.json(dataProjets);
}