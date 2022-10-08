import React from 'react'

import facebookLogo from '../Images/logo.svg'

const FacebookHome = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-200  bg-cover">
        <div className='flex w-full h-[600px]  m-auto'>

            {/* heading section  */}
            <div className='basis-1/2 '>
              <div className='flex justify-end'>
              <div className='basis-3/5 mt-[50px]'>
                <img src={facebookLogo} className='w-[300px] h-[106px]'/>
                <h1 className='text-2xl pl-[30px]'>Facebook helps you connect and share with the people in your life.</h1>
              </div>
              </div>  
            </div>

            {/* login section */}
            <div className='basis-1/2'>
                <div className='w-[396px] h-[349px] bg-white ml-[100px] rounded-lg border drop-shadow-lg'>
                 <div className='flex flex-col'>
                    <input className='border border-slate-200 p-[15px] mx-[15px] mt-[15px] rounded-md' placeholder='Email address or phone number'/>
                    <input className='border border-slate-200 p-[15px] mx-[15px] mt-[15px] rounded-md' placeholder='Password'/>
                    <button className='bg-blue-500 p-[15px] mx-[15px] mt-[15px] rounded-md text-white font-bold hover:bg-blue-600'>Login</button>
                    <p className='text-xs font-semibold text-center mt-[15px] text-blue-500 hover:underline decoration-blue-500'>Forgotten password?</p>
                    <div class="mt-[20px] border-b border-slate-300 mx-[15px]"></div>
                    <button className='bg-green-500 p-[15px] mx-[15px] mt-[15px] rounded-md text-white font-bold hover:bg-green-600'>Login</button>
                 </div>
                 <p className='text-xs mt-[30px] text-center'><span className='font-bold'>Create a Page</span> for a celebrity, brand or business. </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FacebookHome