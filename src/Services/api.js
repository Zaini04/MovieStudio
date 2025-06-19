const Api_Key = "305c99579154813e1738078b7b4a16f9"
const BASE_URL = "https://api.themoviedb.org/3";

export const getPapularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${Api_Key}`);
    const data = await response.json();    
    return data.results
}
export const searchMovies = async (query)=>{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${Api_Key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
}