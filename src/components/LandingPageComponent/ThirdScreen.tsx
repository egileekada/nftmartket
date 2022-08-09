import React from 'react'
import Users from "../../assets/images/avatar.png"
import bg from "../../assets/images/gradient2.png"
import Solona from "../../assets/images/Solo.svg"

export default function ThirdScreen() {

    const Items =()=> {
        return( 
            <div className=' w-full h-28 py-6 rounded-md px-6 flex items-center bg-[#2c0d4e] ' >
                <div className=' w-14 h-14 bg-blue-500 rounded-full ' >
                    <img src={Users} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className=' ml-4' >
                    <p className=' font-NotoSans-Bold text-[#cfc7d5] ' >Bored apes</p>
                    <p className=' font-NotoSans-Medium text-[#737373] text-sm mt-3 flex items-center ' >Floor price: <img src={Solona} className="w-3 mx-1"  />263.00</p>
                </div>
                <div className=' ml-auto' >
                    <p className=' font-NotoSans-Medium text-[#00AE23] text-sm  ' >+7.58%</p>
                    <p className=' font-NotoSans-Medium text-[#737373] text-sm mt-4 flex items-center ' ><img src={Solona} className="w-3 mx-1"  />263.00</p>
                </div>
            </div>
        )
    }

    return (
        <div className=' relative w-full flex justify-center ' > 
            <img src={bg} className="w-full h-full inset-0 object-cover absolute" /> 
            <div className='w-full xl:w-1360px py-20 z-10 flex flex-col justify-center items-center ' > 
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
                <button className=' font-NotoSans-Bold w-40  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] mt-14 text-[#FCFCFC] h-12 rounded-md ' >
                Go to rankings 
                </button>
            </div>
        </div>
    )
} 