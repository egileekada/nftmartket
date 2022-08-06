import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SecondScreen() {
    return (
        <div className=' w-full flex items-center bg-[#170031] text-[#cfc7d5] px-10 lg:mb-0 mb-8 py-14 ' >
            <button className=' w-12 h-12 flex justify-center items-center pr-1 rounded-full bg-[#24083c] ' >
                <IoIosArrowBack size={30} />
            </button>
            <div className=' w-auto flex flex-1 px-4 font-NotoSans-Medium  ' >
                <div className=' w-full flex flex-col items-center mx-2 ' >
                    <div className='w-full h-72 bg-green-400' >

                    </div>
                    <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                    <p className=' text-[#737373] my-1 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className=' font-NotoSans-Bold w-full bg-[#3C3C3C] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                        Buy Now 
                    </button>
                </div>
                <div className=' w-full flex flex-col items-center mx-2 ' >
                    <div className='w-full h-72 bg-green-400' >

                    </div>
                    <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                    <p className=' text-[#737373] my-1 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className=' font-NotoSans-Bold w-full bg-[#3C3C3C] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                        Buy Now 
                    </button>
                </div>
                <div className=' w-full flex flex-col items-center mx-2 ' >
                    <div className='w-full h-72 bg-green-400' >

                    </div>
                    <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                    <p className=' text-[#737373] my-1 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className=' font-NotoSans-Bold w-full bg-[#271a47] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                        Buy Now 
                    </button>
                </div>
            </div>
            <button className=' w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-[#24083c] ' >
                <IoIosArrowForward size={30} />
            </button>
        </div>
    )
} 