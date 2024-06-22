import React from 'react'

const Model = () => {
  return (
    <>
    <div>
        <div className='w-full min-h-screen flex justify-center items-center relative'>
          <div className="iptBox h-full w-full flex flex-col justify-center items-center">
            <h1 className='text-3xl mb-4 font-bold'>Hey <span className='text-amber-500'>@Abhay Sharma</span> :)</h1>
            <p className='mb-8'>We've reached till <span className='text-amber-500'>"0000"</span> as of now</p>
            <div className='flex flex-col mb-10 text-center'>
            <label htmlFor="" className='text-xl'>Change it to:-</label>
            <input type="number" className='border-2 border-gray-300 outline-none px-2 h-6 w-52 rounded-md'/>
            </div>
            <div>
            <label htmlFor="" className='text-2xl'>What was their average rating?</label>
            </div>
            <div className='lg:flex gap-5 text-center text-xl font-extrabold mt-5 mb-5'>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-black'>1</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-gray-500'>2</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-green-500'>3</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-purple-500'>4</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-blue-500'>5</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-fuchsia-500'>6</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-yellow-500'>7</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-orange-500'>8</span>
            <br/>
            <input type="radio"className='mx-5 ' name="rating"/><span className='text-pink-500'>9</span>
            <br/>
            <input type="radio"className='ml-7 mr-4' name="rating"/><span className='text-red-500'>10</span>
            </div>
            <input type="submit" className='border-2 border-blue-500 h-10 w-36 rounded-md bg-blue-500 text-white font-bold'/>
            <span className='text-sm text-amber-500 font-bold mt-2'>Note: Records are being tracked</span>
          </div>
        </div>
    </div>
    </>
  )
}

export default Model