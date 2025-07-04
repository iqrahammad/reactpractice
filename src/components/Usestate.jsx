import React, { useState } from 'react'

const Usestate = () => {
    const [count ,update]=useState(0);
    const addCount=()=>{
        update(count+1)

    }
    const subCount=()=>{
        update(count-1)
    }
  return (
    <>
    <div className='Centre  text-center'>
        <h1>Press The Button Below {count}</h1>
       <div className='flex justify-center'>
        <button onClick={addCount} className='bg-black text-amber-400 font-bold py-3 rounded hover:bg-amber-700 w-20 m-2 p-2'>Add</button>
        <button onClick={subCount} className='bg-black text-amber-400 font-bold py-3 rounded hover:bg-amber-700 w-20 m-2 p-2'>subtract</button>
        </div> 
    </div>
    </>
  )
}

export default Usestate
