import React from 'react'

const textarea = () => {
  return (
    <div className=' flex flex-col border border-gray-200 rounded-lg h-100% m-6'>
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-4'>System</h2>
        <textarea
          className='w-full h-screen my-4 resize-none bg-transparent focus:outline-none border-0'
          placeholder='You are helpful assistant.'
        />
      </div>
    </div>
  )
}

export default textarea
