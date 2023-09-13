import api from "./baseAPI";

async function GetMovie(id){
    try{
        const response = await api.get("/movieByGenre/" + id);
        if(response.status === 200){
            const data = response.data;
            return ({
                movies: data,
                status: true,
            });
        }

        return({
            movies: response.data,
            status: false,
        })
    } catch(e){
        throw e;
    }
}

export default GetMovie;