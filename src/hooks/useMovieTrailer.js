import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovieTrailer } from '../store/movieSlice';
import { API_OPTIONS } from '../utils/constants';

function useMovieTrailer(movieId) {
const dispatch=useDispatch()
const getMovieVideos= async()=>{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS)
    const json= await data.json();
    const filteredData= json.results.filter(video=>video.type==="Trailer")
    const trailer= filteredData.length? filteredData[0]:json.results[0]
    dispatch(addMovieTrailer(trailer))
    }

useEffect(()=>{
    getMovieVideos();
},[])
  
}

export default useMovieTrailer;
