import React from 'react'

function ConsoleHeader() {
  return (
    <header className='w-[85vw] ml-[15vw] flex items-center justify-between px-5 font-medium py-3 text-sm lg:text-md'>
        <div className="right ">
            <h1 className=''>Welcome to your console</h1>
        </div>
        <div className="left flex items-center gap-3">
            <span className='flex items-center gap-2 text-sm'>
            <i className="fa-solid fa-user"></i>
            <h3>Admin Admin</h3>
            </span>
            <i className="fa-regular fa-moon lg:text-lg bg-black bg-opacity-30 dark:bg-opacity-10 dark:bg-white px-2 rounded-full shadow-md hover:opacity-50 delay-100 duration-100 transition-opacity"></i>

        </div>
    </header>
  )
}

export default ConsoleHeader