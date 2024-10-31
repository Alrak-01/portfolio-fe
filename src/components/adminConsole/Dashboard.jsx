import React from 'react'

function Dashboard() {
  return (
    <section className='lg:ml-[15vw] pt-10 px-5 lg:h-[91.5vh]'>
        <h1 className='text-xl font-semibold pb-3'>Dashboard</h1>
        <div className="cards bg-white dark:bg-opacity-10 rounded-lg py-10 px-5 lg:flex space-y-5 lg:space-y-0 gap-3">
            <div className="card w-full h-36 grid p-3 font-semibold shadow-lg rounded-md border dark:border-stone-800">
                <h3>All Projects</h3>
                <span className='text-center'>10</span>
                <a href="#" className='text-right text-slate-600 hover:text-slate-900 dark:hover:text-slate-700 focus:text-slate-900 duration-300 delay-100 transition-colors ease-in-out space-x-2'>
                    <span>view all</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </a>
            </div>

            <div className="card w-full h-36 grid p-3 font-semibold shadow-lg rounded-md border dark:border-stone-800">
                <h3>All Skills</h3>
                <span className='text-center'>10</span>
                <a href="#" className='text-right text-slate-600 hover:text-slate-900 dark:hover:text-slate-700 focus:text-slate-900 duration-300 delay-100 transition-colors ease-in-out space-x-2'>
                    <span>view all</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </a>
            </div>

            <div className="card w-full h-36 grid p-3 font-semibold shadow-lg rounded-md border dark:border-stone-800">
                <h3>All Projects</h3>
                <span className='text-center'>10</span>
                <a href="#" className='text-right text-slate-600 hover:text-slate-900 dark:hover:text-slate-700 focus:text-slate-900 duration-300 delay-100 transition-colors ease-in-out space-x-2'>
                    <span>view all</span>
                    <i className="fa-solid fa-right-to-bracket"></i>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Dashboard