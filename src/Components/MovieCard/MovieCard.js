import { fetchMovieVideos } from '../../ApiCalls';
import './MovieCard.css'; 
// import {Nav} from './Components/Nav/Nav'
import { useEffect, useState } from 'react';
//import {MovieCard} from '../MovieCard/MovieCard'

export const MovieCard = ({image, title, id}) => {

    const [hover, setHover] = useState(false)
    const [readyToFetchMovie, setReadyToFetchMovie] = useState(false)
    const [videoKey, setVideoKey] = useState('')

    // let baseUrl = 'https://www.youtube.com/watch?v='
    let baseUrl = "https://www.youtube.com/embed/"
    useEffect(() => {
        // This function will run after the component is mounted
        // It may also run if any of the specified dependencies change
    
       if (readyToFetchMovie) {
        fetchMovieVideos(id).then (data => {
         setVideoKey(data.videos[0].key)
          setReadyToFetchMovie(false)
          //setMovies(data.movies)
        })}
      }, [readyToFetchMovie]); 

    const handleMouseEnter = () => {
        console.log('onEnter fired', id)
        setHover(true)
        setReadyToFetchMovie(true)

    }

    const handleMouseLeave = () => {
        console.log('onLeave fired')
        setHover(false)
        setVideoKey('')
    }
//console.log('this is balba  ba ba b a ', baseUrl + videoKey + "?mute=1&autoplay=1");
//console.log('this is video key', videoKey );
    return (
        <>
            <h2>{title}</h2>
            <div className='movie-card-box' onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>

            {!hover && <img src={image} alt={`${title} movie poster`} />  } 
            {/* {readyToFetchMovie && <h2 >loading...</h2>} */}
            {hover &&  <iframe src={baseUrl + videoKey + "?mute=1&autoplay=1"} 
 className="trailer"
    //  width="360"
    //  height="215"
 title="YouTube video player"
 frameBorder="0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
            />} 
            {/* {!hover && !videoKey? 
            <img src={image} alt={`${title} movie poster`} /> :
            <h2 >loading...</h2> } */}
        </div>
        </>
    )
}

//<iframe
// className="trailer"
// width="360"
// height="215"
// src={trailer}
// title="YouTube video player"
// frameBorder="0"
// allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// allowFullScreen
// ></iframe>