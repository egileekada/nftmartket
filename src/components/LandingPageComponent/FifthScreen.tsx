import React from 'react'

export default function FifthScreen() {

    const Item =()=> {
        return(
            <div className='w-full flex flex-col items-center ' >
                <div className=' w-full py-6 h-72 rounded-md px-6 flex items-center bg-[#2c0d4e] ' />
                <p className='text-[#FCFCFC] font-NotoSans-Medium mt-3  ' >Photography</p>
            </div>
        )
    }

    return (
        <div  className='w-full py-16 flex flex-col justify-center items-center ' > 
            <p className=' font-NotoSans-Bold text-3xl pb-10 text-center text-[#FCFCFC]' >Top collections over last 24 hours</p>
            <div className=' w-full grid px-10 gap-6 grid-cols-3 ' > 
               {Item()}
               {Item()}
               {Item()}
               {Item()}
               {Item()}
               {Item()}
            </div>
        </div>
    )
} 