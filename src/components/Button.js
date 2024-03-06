import React from 'react'

const Button = () => {
  return (
    <div className='flex flex-row items-center justify-center'>
     <button 
      className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 mr-5 rounded-lg cursor-pointer transition duration-200 ease-in-out">
      Submit
    </button> 
    </div>
  )
}

export default Button
