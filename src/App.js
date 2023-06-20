import './App.css';
import Fs065TotalTime from './Components/Fs065TotalTime';
import Fs01Header from './Components/Fs01Header';
import Fs02Navbar from './Components/Fs02Navbar';
import Fs03Carosel from './Components/Fs03Carosel';
import Fs04Category from './Components/Fs04Category';
import Fs05Services from './Components/Fs05Services';
import Fs07Footer from './Components/Fs07Footer';


import React from 'react'

export default function () {
  return (
    <div>
      <Fs01Header />
      <Fs02Navbar/>
      <Fs03Carosel />
      <Fs04Category />
      <Fs05Services />
      <Fs065TotalTime />
      <Fs07Footer />
    </div>
  )
}

