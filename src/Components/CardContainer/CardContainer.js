import './CardContainer.css'; 
// import {Nav} from './Components/Nav/Nav'
import { useEffect, useState } from 'react';
import {MovieCard} from '../MovieCard/MovieCard'


export const CardContainer = (props) => {
    // const [ movies, setMovies ] = useState([])
 const { movies} = props
// 
console.log('movies from Container', movies);

const renderCards = () => {
   let arrayOfMovieElements = movies.map((movie, index) => {
    return <MovieCard title={movie.title} image={movie.poster_path} key={index} id={movie.id}/>
   })
   return arrayOfMovieElements
}

return (
    <>
    {/* <MovieCard /> */}
    {renderCards()}
     
    </>
)

}