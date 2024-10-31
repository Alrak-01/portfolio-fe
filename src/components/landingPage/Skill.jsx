import React from 'react'

function Skill() {
  return (
    <div id='skill' className='lg:px-48 px-2 pt-16 whitespace-nowrap'>
       <h1 className='lg:text-4xl text-3xl text-gray-900 dark:text-white font-medium lg:pb-10 pb-5'>Tech Stake - Experience</h1>
       <ol className="list-disc space-y-5">
        <li className='font-medium text-lg'>Languages</li>
        <div>
            <ul className="list-disc ml-6 lg:flex items-center gap-20 w-full space-y-5 lg:space-y-0">
              <li className='text-[#3792a5] font-bold'>HTML / CSS - <span>3 years</span></li>
              <li className='text-[#3792a5] font-bold'>JavaScript - <span>3 years</span></li>
              <li className='text-[#3792a5] font-bold'>PHP - <span>3 years</span></li>
            </ul>
        </div>
        <li className='font-medium text-lg'>Frameworks</li>
        <div>
        <ul className="list-disc ml-6 lg:flex items-center gap-20 w-full space-y-5 lg:space-y-0">
              <li className='text-[#3792a5] font-bold'>React.js - <span>1 years</span></li>
              <li className='text-[#3792a5] font-bold'>Tailwind css - <span>2 years</span></li>
              <li className='text-[#3792a5] font-bold'>Bootstrap - <span>3 years</span></li>
              <li className='text-[#3792a5] font-bold'>Laravel - <span>2 years</span></li>
            </ul>
        </div>
        <li className='font-medium text-lg'>Others</li>
        <div>
        <ul className="list-disc ml-6 flex items-center gap-20 w-full space-y-5 lg:space-y-0">
              <li className='text-[#3792a5] font-bold'>Rest Api - <span>2 years</span></li>
            </ul>
        </div>
       </ol>
    </div>
  )
}

export default Skill