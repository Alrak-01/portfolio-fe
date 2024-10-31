import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/landingPage/Home';
import FullAbout from './components/landingPage/FullAbout';
import AllProjects from './components/landingPage/AllProjects';


// import Sidebar from './components/adminConsole/Sidebar'
// import ConsoleHeader from './components/adminConsole/ConsoleHeader'
// import Dashboard from './components/adminConsole/Dashboard'
// import ConsoleSkill from './components/adminConsole/ConsoleSkill'
// import ConsoleAbout from './components/adminConsole/ConsoleAbout'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<FullAbout />}/>
        <Route path='/project' element={<AllProjects />}/>
      </Routes>
    </Router>

    {/* <main className='pb-5 dark:bg-black dark:text-white bg-zinc-200 h-auto z-10'>
    <Header />        
    <About />
    <Skill />
    <Projects />
    <Contact />
    </main> */}
  
    </>
  )
}

export default App
