import React from 'react'
import Header from './Header'

function AllProjects() {
  return (

    <div className=''>
        <Header />
       <div className='lg:px-48 px-2 lg:pt-16 pt-10'>
       <h1 className='lg:text-5xl text-3xl text-gray-900 dark:text-white font-medium pb-6'>Projects</h1>
        <h3 className='lg:text-xl text-lg text-gray-800 dark:text-gray-100 leading-8'>Open-source projects I've made over the years, including this website, an emulator, and various games, apps, frameworks, and boilerplates.</h3>
        <div className="cards grid lg:grid-cols-3 gap-5 pt-12">
            <div className="card h-auto w-full border border-zinc-400 p-5 rounded-lg space-y-2 shadow-lg bg-white dark:bg-neutral-950 dark:border-stone-800">
                <p className='text-sm text-gray-800 dark:text-[#3792a5]'>2023</p>
                <a href="#" className='block hover:underline font-medium text-xl delay-100 duration-100'>TakeNote</a>
                <h3 className='text-md text-gray-800 dark:text-gray-100'>A free, open source notes app for the web</h3>
                <div className="button flex items-center gap-3 pt-1">
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>Live Preview</a>
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>GitHub</a>
                </div>
            </div>

            <div className="card h-auto w-full border border-zinc-400 p-5 rounded-lg space-y-2 shadow-lg bg-white dark:bg-neutral-950 dark:border-stone-800">
                <p className='text-sm text-gray-800 dark:text-[#3792a5]'>2023</p>
                <a href="#" className='block hover:underline font-medium text-xl delay-100 duration-100'>TakeNote</a>
                <h3 className='text-md text-gray-800 dark:text-gray-100'>A free, open source notes app for the web</h3>
                <div className="button flex items-center gap-3 pt-1">
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>Live Preview</a>
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>GitHub</a>
                </div>
            </div>

            <div className="card h-auto w-full border border-zinc-400 p-5 rounded-lg space-y-2 shadow-lg bg-white dark:bg-neutral-950 dark:border-stone-800">
                <p className='text-sm text-gray-800 dark:text-[#3792a5]'>2023</p>
                <a href="#" className='block hover:underline font-medium text-xl delay-100 duration-100'>TakeNote</a>
                <h3 className='text-md text-gray-800 dark:text-gray-100'>A free, open source notes app for the web</h3>
                <div className="button flex items-center gap-3 pt-1">
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>Live Preview</a>
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>GitHub</a>
                </div>
            </div>

            <div className="card h-auto w-full border border-zinc-400 p-5 rounded-lg space-y-2 shadow-lg bg-white dark:bg-neutral-950 dark:border-stone-800">
                <p className='text-sm text-gray-800 dark:text-[#3792a5]'>2023</p>
                <a href="#" className='block hover:underline font-medium text-xl delay-100 duration-100'>TakeNote</a>
                <h3 className='text-md text-gray-800 dark:text-gray-100'>A free, open source notes app for the web</h3>
                <div className="button flex items-center gap-3 pt-1">
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>Live Preview</a>
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>GitHub</a>
                </div>
            </div>

            <div className="card h-auto w-full border border-zinc-400 p-5 rounded-lg space-y-2 shadow-lg bg-white dark:bg-neutral-950 dark:border-stone-800">
                <p className='text-sm text-gray-800 dark:text-[#3792a5]'>2023</p>
                <a href="#" className='block hover:underline font-medium text-xl delay-100 duration-100'>TakeNote</a>
                <h3 className='text-md text-gray-800 dark:text-gray-100'>A free, open source notes app for the web</h3>
                <div className="button flex items-center gap-3 pt-1">
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>Live Preview</a>
                    <a href="#" className='border dark:text-gray-100 border-gray-400 dark:border-stone-800 rounded-lg px-2 py-1 text-gray-800 delay-100 duration-100 transition-opacity hover:bg-black hover:bg-opacity-5'>GitHub</a>
                </div>
            </div>
            
            
        </div>
       </div>
    </div>
  )
}

export default AllProjects