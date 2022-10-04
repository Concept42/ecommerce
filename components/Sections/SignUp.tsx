import React from 'react'

function SignUp() {
  return (
    <div className='flex bg-gray-200 w-full min-h-[100px] justify-center items-center my-10  '>
      <div className='flex items-center justify-between min-w-[1200px] max-w-7xl h-full'>
        <h1 className='text-2xl font-poppins font-light py-16'>Sign up for Send Newsletter</h1>
        <div className='flex '>
          <input placeholder='Your Email' className='w-96 pl-4 outline-red-600' />
          <button className='flex px-9 py-3 bg-red-600 text-white hover:bg-gray-800 transition-all duration-300'>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
