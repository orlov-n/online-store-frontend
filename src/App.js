import './App.css'; 
import {fetchData} from './ApiCalls'

import {Nav} from './Components/Nav/Nav'
import { useEffect, useState } from 'react';
import { CardContainer } from './Components/CardContainer/CardContainer';
import { Route, Routes } from 'react-router-dom';



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
    <Routes>
      <Route path="/" element={
       <CardContainer movies={movies} />
       
      }/>
      {/* <Route path='/Art' element={<Art/>} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Placeholder' element={<Placeholder/>} />
      <Route path='/Placeholder2' element={<Placeholder2/>} /> */}

</Routes>
      </> 

    
  )
}

