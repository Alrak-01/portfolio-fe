import React from 'react'

function Contact() {
  return (
    <div id='contact' className='contact px-48 pt-16 pb-5 lg:pb-0'>
        <ul className='flex items-center justify-center gap-5 text-xl'>
            {/* <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li> */}
            <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-github"></i></a></li>
            {/* <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-upwork"></i></a></li> */}
            <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-brands fa-skype"></i></a></li>
            <li className='bg-white px-2 py-1 rounded-lg shadow-md hover:opacity-50 delay-100 duration-300 transition-opacity dark:bg-opacity-10'><a href="#"><i className="fa-regular fa-envelope"></i></a></li>
        </ul>
    </div>
  )
}

export default Contact