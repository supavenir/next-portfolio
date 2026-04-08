
const BASE_URL = "http://localhost:3000/api/";

export const API_URLS = {
    projets:{
        all: BASE_URL+"projets",
        one:(id:number)=>BASE_URL+`projets/${id}`,
    }
}