import React from 'react'

export default function ThirdScreen() {

    const Items =()=> {
        return( 
            <div className=' w-full py-6 rounded-md px-6 flex items-center bg-[#2c0d4e] ' >
                <div className=' w-14 h-14 bg-blue-500 rounded-full ' >

                </div>
                <div className=' ml-4' >
                    <p className=' font-NotoSans-Bold text-[#cfc7d5] ' >Bored apes</p>
                    <p className=' font-NotoSans-Medium text-[#737373] text-xs mt-3 ' >Floor price: $263.00</p>
                </div>
                <div className=' ml-auto' >
                    <p className=' font-NotoSans-Medium text-[#00AE23] text-xs  ' >+7.58%</p>
                    <p className=' font-NotoSans-Medium text-[#737373] text-xs mt-4 ' >$263.00</p>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full py-16 flex flex-col justify-center items-center ' > 
            <div className=' w-full grid px-10 gap-6 grid-cols-3 ' >
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
            </div>
            <button className=' font-NotoSans-Bold w-40 bg-[#271a47] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                Buy Now 
            </button>
        </div>
    )
} 