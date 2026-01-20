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
import Others from "./pages/others.jsx";
import Sports from './pages/Sports.jsx'
import News from './pages/News.jsx'
import Tvserials from './pages/Tvserials.jsx'
import Cartoons from './pages/Cartoons.jsx'
import Sportsother from './pages/Sportsother.jsx'
import Cartoonother from './pages/Cartoonother.jsx'
import Newsother from './pages/Newsother.jsx'
import Tvserialother from './pages/Tvserialother.jsx'
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
        <Route path='/sports' element={<Sports></Sports>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/tvserials' element={<Tvserials></Tvserials>}></Route>
        <Route path='/cartoons' element={<Cartoons></Cartoons>}></Route>
        <Route path='/Sportsother/:id' element={<Sportsother></Sportsother>}></Route>
        <Route path='/Cartoonother/:id' element={<Cartoonother></Cartoonother>}></Route>
        <Route path='/Newsother/:id' element={<Newsother></Newsother>}></Route>
        <Route path='/Tvserialother/:id' element={<Tvserialother></Tvserialother>}></Route>
      </Routes>
      

                  
    </>
  )
}

export default App