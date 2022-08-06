import React from 'react'
import Users from "../../assets/images/avatar.png"

export default function ThirdScreen() {

    const Items =()=> {
        return( 
            <div className=' w-full py-6 rounded-md px-6 flex items-center bg-[#2c0d4e] ' >
                <div className=' w-14 h-14 bg-blue-500 rounded-full ' >
                    <img src={Users} className="w-full h-full rounded-full object-cover" />
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
        <div className='w-full py-20 flex flex-col justify-center items-center ' > 
            <p className=' font-NotoSans-Bold text-3xl pb-10 text-center text-[#FCFCFC]' >Top collections over last 24 hours</p>
            <div className=' w-full grid px-10 gap-6 grid-cols-3 ' >
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
                {Items()}
            </div>
            <button className=' font-NotoSans-Bold w-40 bg-[#271a47] mt-14 text-[#FCFCFC] h-12 rounded-md ' >
            Go to rankings 
            </button>
        </div>
    )
} 