import React from 'react'

function Sidebar() {
  return (
    <section className='sidebar lg:h-screen h-auto lg:w-[15vw] py-3 lg:border-r bg-zinc-100 dark:bg-black dark:border-stone-900 absolute'>
        <div className='flex items-center justify-center gap-4 px-2 lg:px-0 text-sm lg:text-md'>
        <h3 className='text-center font-serif italic font-bold'>Alrak</h3>
        <span>
        <i className="fa-solid fa-bars lg:text-lg lg:hidden block"></i>
        </span>
        </div>
        <ul className='text-gray-800 space-y-5 pt-10 font-medium hidden lg:block'>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'> 
                    <i className="fa-solid fa-table-cells pr-5"></i>
                     <span>Dashboard</span>
                </a>
            </li>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'>
                    <i className="fa-solid fa-list-check pr-5"></i>
                    <span>Project</span>
                </a>
            </li>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'>
                    <i className="fa-solid fa-lightbulb pr-5"></i> 
                    <span>Skill</span>
                </a>
            </li>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'>
                    <i className="fa-solid fa-address-card pr-5"></i>
                    <span>About</span>
                </a>
            </li>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'>
                    <i className="fa-solid fa-comment pr-5"></i> 
                    <span>My socials</span>
                </a>
            </li>
            <li className='hover:bg-gray-700 py-1 hover:text-white dark:text-white dark:hover:bg-gray-300 dark:hover:text-black duration-300 delay-100 transition-colors ease-in-out rounded-md border-b dark:border-stone-900 '>
                <a href="#" className='px-5'>
                    <i className="fa-solid fa-person-walking-luggage pr-5"></i> 
                    <span>Logout</span>
                </a>
            </li>
        </ul>
    </section>

    // <section className="sidebar h-screen bg-zinc-100 w-52 py-5">
    //   <h3 className="text-center font-serif italic font-bold text-xl">Alrak</h3>
    //   <ul className="mt-8 space-y-4">
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-table-cells"></i>
    //         <span>Dashboard</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-list-check"></i>
    //         <span>Project</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-lightbulb"></i>
    //         <span>Skill</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-address-card"></i>
    //         <span>About</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-comment"></i>
    //         <span>My socials</span>
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#" className="flex items-center space-x-2 hover:text-blue-500">
    //         <i className="fa-solid fa-person-walking-luggage"></i>
    //         <span>Logout</span>
    //       </a>
    //     </li>
    //   </ul>
    // </section>
  )
}

export default Sidebar