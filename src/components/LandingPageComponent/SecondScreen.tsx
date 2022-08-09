import React from 'react'
import one from "../../assets/images/featured1.png"
import two from "../../assets/images/featured2.png"
import three from "../../assets/images/featured3.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SecondScreen() {
    return (
        <div className=' w-full flex justify-center bg-[#170031] ' > 
            <div className='w-full xl:w-1360px py-24 ' > 
                <p className=' font-NotoSans-Bold text-3xl pb-10 text-center text-[#FCFCFC]' >Featured Drops</p>
                <div className=' w-full flex items-center text-[#cfc7d5] px-10 lg:mb-0 mb-8 ' >
                    <button className=' w-12 h-12 flex justify-center items-center pr-1 rounded-full bg-[#24083c] ' >
                        <IoIosArrowBack size={30} />
                    </button>
                    <div className=' w-auto flex flex-1 px-4 font-NotoSans-Medium  ' >
                        <div className=' w-full relative flex flex-col items-center mx-2 ' > 
                            <img src={one} className=' object-cover w-full h-full ' /> 
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25' />
                            <div className='absolute text-[#FFFFFF] px-5 bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-full relative flex flex-col items-center mx-2 ' > 
                            <img src={two} className=' object-cover w-full h-full ' /> 
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25' />
                            <div className='absolute text-[#FFFFFF] px-5 bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-full relative flex flex-col items-center mx-2 ' > 
                            <img src={three} className=' object-cover w-full h-full ' /> 
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25' />
                            <div className='absolute text-[#FFFFFF] px-5 bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                    </div>
                    <button className=' w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-[#3C3C3C] ' >
                        <IoIosArrowForward size={30} />
                    </button>
                </div>
            </div>
        </div>
    )
} 