import api from './baseAPI';

async function GetGenre() {
    try {
        const response = await api.get('/genresList');
        if (response.status === 200) {
            const data = response.data;
            return ({
                movies: data,
                status: true,
            });
        };
        return ({
            movies: response.data,
            status: false,
        })
    } catch (e) {
        throw (e);
    }
}

export default GetGenre;