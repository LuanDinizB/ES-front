import api from "./baseAPI";

async function getGenre(){
    try{
        const response = await api.get("/genreList");
        if(response.status === 200){
            const data = response.data;
            return ({
                genres: data,
                status: true,
            });
        }

        return({
            genres: response.data,
            status: false,
        })
    } catch(e){
        throw e;
    }
}

export {getGenre};