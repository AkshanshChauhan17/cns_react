import { useState } from 'react';
import './App.scss'
import Home from './components/home'
import Navigation from './components/navigation';
import { Route, Routes } from 'react-router-dom';
import OuterTour from './components/tours';
import BuildingOneTour from './components/tours/building1';
import BuildingTwoTour from './components/tours/building2';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <>
    {isNavOpen && <Navigation inoDef={setIsNavOpen} />}
    <Routes>
      <Route path='/' element={<Home inoDef={setIsNavOpen} />} />
      <Route path='/tour' element={<OuterTour />} />
      <Route path='/tour/b1' element={<BuildingOneTour />} />
      <Route path='/tour/b2' element={<BuildingTwoTour />} />
    </Routes>
    </>
  )
}

export default App;