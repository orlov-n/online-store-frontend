import './App.css'; 
import {fetchData} from './ApiCalls'

import {Nav} from './Components/Nav/Nav'
import { useEffect, useState } from 'react';
import { CardContainer } from './Components/CardContainer/CardContainer';


export const App = () => {
  const [ movies, setMovies ] = useState([])


  useEffect(() => {
    // This function will run after the component is mounted
    // It may also run if any of the specified dependencies change

    fetchData().then (data => {
      console.log(data)
      setMovies(data.movies)
    })
  }, []); 
  
  


  return (
    <>
     <Nav />
     {/* {!movies.length ? <p>loading....</p> : <p>{movies[0].title}</p>}
    <h1>Hello World!</h1> */}
    <CardContainer movies={movies} />
    </>
  )
}

