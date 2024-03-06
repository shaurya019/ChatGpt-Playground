import React from 'react'

const History = () => {
  return (
    <div className='flex flex-col w-full justify-between '>
    <button>
    <h5 className='text-right'>Cross</h5>
    </button>
    <div className='flex flex-col w-full justify-center items-center'>
     <h3 className='text-base font-bold mt-[30px] mb-4'>Your history will appear here</h3>   
      <h5 className='text-sm'>View and restore generations from <br />the last 30 days</h5>
    </div>
    </div>
  )
}

export default History
