import React, { useState } from 'react';

const ConsoleSkill = () => {
  const [showForm, setShowForm] = useState(false);

  // Toggle function to show/hide form
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="lg:ml-[15vw] pt-10 px-5 lg:h-[91.5vh]">
      <h1 className='text-xl font-semibold mb-3'>Skills</h1>
      <div className="skill bg-white py-10 rounded-lg">

        {/* Form Toggle Button */}
        <div className="skill-container">
          {!showForm && (
            <div className="button flex items-end justify-end pb-5 px-5">
              <button
                className="AddSkill text-sm bg-black text-white py-2 px-4 rounded-md hover:bg-opacity-90"
                onClick={toggleForm}
              >
                Add Skill
              </button>
            </div>
          )}

          {/* Form Display */}
          {showForm && (
            <form className="px-5 rounded-md grid gap-3 text-sm lg:text-lg">
              <div className="grid lg:grid-cols-2 space-y-4 lg:space-y-0 lg:gap-5">
                <div className="category grid lg:gap-2">
                  <label htmlFor="category" className="font-semibold">
                    New Skill <span className="text-red-600 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Skill"
                    className="border border-gray-300 p-2 text-sm rounded-md outline-none focus:border-green-900 transition-all duration-300 delay-75"
                    spellCheck="false"
                    required
                  />
                </div>
                <div className="category grid gap-2">
                  <label htmlFor="category" className="font-semibold">
                    Experience <span className="text-red-600 text-sm">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Years"
                    className="border border-gray-300 p-2 text-sm rounded-md outline-none focus:border-green-900 transition-all duration-300 delay-75"
                    spellCheck="false"
                    required
                  />
                </div>
              </div>

              <div className="button flex items-end lg:justify-end pb-5">
                <button
                  type="submit"
                  className="text-xs lg:text-sm bg-black text-white py-2 px-4 rounded-md hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Display Skills */}
        <div className="displayCategory pl-5 overflow-hidden">
          <h1 className="lg:text-xl text-lg font-medium mb-5">All Skills</h1>
          <div>
            <ul className="list-disc text-sm w-full grid lg:grid-cols-3 grid-cols-2 gap-10">
              <li className='text-[#3792a5] font-bold w-full'>
                HTML / CSS - 
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>

              <li className='text-[#3792a5] font-bold w-full'>
                HTML / CSS - 
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>

              <li className='text-[#3792a5] font-bold w-full'>
                JavaScript - 
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>

              <li className='text-[#3792a5] font-bold w-full'>
                Php -
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>

              <li className='text-[#3792a5] font-bold w-full'>
                React - 
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>

              <li className='text-[#3792a5] font-bold w-full'>
                HTML / CSS - 
                <span>3 years</span>
                <span className='pl-3 space-x-2'>
                  <i className="fa-solid fa-trash text-red-600"></i>
                  <i className="fa-solid fa-pen-to-square text-blue-600"></i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsoleSkill;
