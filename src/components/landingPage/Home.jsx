import React from 'react'
import Header from './Header'
import About from './About'
import Skill from './Skill'
import Projects from './Projects'
import Contact from './Contact'


function Home() {
  return (
    <div>
    <main className='pb-5 dark:bg-black dark:text-white bg-zinc-200 h-auto z-10'>
        <Header />        
        <About />
        <Skill />
        <Projects />
        <Contact />
    </main>
    </div>
  )
}

export default Home