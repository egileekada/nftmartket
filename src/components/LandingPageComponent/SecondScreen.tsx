import React from 'react'
import one from "../../assets/images/featured1.png"
import two from "../../assets/images/featured2.png"
import three from "../../assets/images/featured3.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SecondScreen() {
    const ref: any = React.useRef(null);  
    const scroll = (scrolloffset : any ) =>{
        ref.current.scrollLeft += scrolloffset 
    };        
    return (
        <div className=' w-full flex justify-center   ' > 
            <div className='w-full xl:py-32 py-24 xl:px-20 ' > 
                <p className=' font-NotoSans-Bold text-3xl text-center text-[#FCFCFC]' >Featured Drops</p>
                <div className=' w-28 bg-white mb-20 mx-auto mt-4 ' style={{height: "2px"}} ></div>
                <div className=' w-full flex items-center text-[#cfc7d5] px-10 lg:mb-0 mb-8 ' >
                    <button onClick={()=> scroll(-500)} className=' w-12 h-12 flex justify-center items-center pr-1 rounded-full bg-[#352E65] ' >
                        <IoIosArrowBack size={30} />
                    </button>
                    <div ref={ref} className='w-full flex flex-row mx-4 overflow-x-auto scroll_event'>
                        <div className='flex flex-row  '>
                    {/* <div className=' w-auto flex ov flex-1 px-4 font-NotoSans-Medium  ' > */}
                        <div className=' w-500px relative flex h-600px  flex-col items-center mx-2 ' > 
                            <img src={one} className=' object-cover absolute   w-full h-600px ' /> 
                            <div style={{ backgroundImage: "linear-gradient(transparent, black)" }} className=' w-full h-full z-20 absolute inset-0 ' />
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25 z-20' />
                            <div className=' text-[#FFFFFF] absolute px-5  bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-500px relative flex h-600px  flex-col items-center mx-2 ' > 
                            <img src={two} className=' object-cover absolute   w-full h-600px ' /> 
                            <div style={{ backgroundImage: "linear-gradient(transparent, black)" }} className=' w-full h-full z-20 absolute inset-0 ' />
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25 z-20' />
                            <div className=' text-[#FFFFFF] absolute px-5  bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-500px relative flex h-600px  flex-col items-center mx-2 ' > 
                            <img src={three} className=' object-cover absolute   w-full h-600px ' /> 
                            <div style={{ backgroundImage: "linear-gradient(transparent, black)" }} className=' w-full h-full z-20 absolute inset-0 ' />
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25 z-20' />
                            <div className=' text-[#FFFFFF] absolute px-5  bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-500px relative flex h-600px  flex-col items-center mx-2 ' > 
                            <img src={one} className=' object-cover absolute   w-full h-600px ' /> 
                            <div style={{ backgroundImage: "linear-gradient(transparent, black)" }} className=' w-full h-full z-20 absolute inset-0 ' />
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25 z-20' />
                            <div className=' text-[#FFFFFF] absolute px-5  bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                        <div className=' w-500px relative flex h-600px  flex-col items-center mx-2 ' > 
                            <img src={two} className=' object-cover absolute  w-full h-600px ' /> 
                            <div style={{ backgroundImage: "linear-gradient(transparent, black)" }} className=' w-full h-full z-20 absolute inset-0 ' />
                            <div className=' w-full absolute inset-0 bg-black bg-opacity-25 z-20' />
                            <div className=' text-[#FFFFFF] absolute px-5  bottom-6 z-20'  > 
                                <p className=' font-NotoSans-SemiBold text-xl mt-3  ' >Meta Kongz</p>
                                <p className='  mt-2 text-sm font-NotoSans-Regular ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div> 
                        </div>
                    </div>
                    </div>
                    <button onClick={()=> scroll(500)} className=' w-12 h-12 flex justify-center items-center pl-1 rounded-full bg-[#352E65] ' >
                        <IoIosArrowForward size={30} />
                    </button>
                </div>
            </div>
        </div>
    )
} 