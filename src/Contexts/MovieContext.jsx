import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export const MovieProvider = ({children})=> {
    const [favorites,setFavorites] = useState([])
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))

    },[])

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))
    },[favorites])

    const addToFav = (movie)=>{
        setFavorites(prev => [...prev,movie])
    }

    const removeFav = (movieId) =>{
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFav = (movieId)=>{
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFav,
        removeFav,
        isFav
    }

    return <MovieContext.Provider  value={value}>
        {children}
    </MovieContext.Provider>

}