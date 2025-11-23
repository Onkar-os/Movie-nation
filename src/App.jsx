import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BollywoodMovies from './pages/BollywoodMovies.jsx'
import Hollywood from './pages/Hollywood.jsx'
import SouthMovie from './pages/SouthMovie.jsx'
import OttSeries from './pages/OttSeries.jsx'
import Others from './pages/Others.jsx'
function App() {


  return (
    <>
     
      <Routes>
        <Route path="" element={<Home />}></Route>
        {/* <Route path="/movie" element={<Movies />}></Route> */}
        <Route path="/bollywood" element={<BollywoodMovies></BollywoodMovies>}></Route>
        <Route path="/hollywood" element={<Hollywood></Hollywood>}></Route>
        <Route path="/southmovie" element={<SouthMovie></SouthMovie>}></Route>
        <Route path="/ottseries" element={<OttSeries></OttSeries>}></Route>
        <Route path="/others/:id" element={<Others></Others>}></Route>
      </Routes>
      

                  
    </>
  )
}

export default App
