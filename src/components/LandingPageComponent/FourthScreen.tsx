import React from 'react'
import b1 from "../../assets/images/phi1.png"
import b2 from "../../assets/images/phi2.png"
import b3 from "../../assets/images/phi3.png"
import u1 from "../../assets/images/pu1.png"
import u2 from "../../assets/images/pu2.png"
import u3 from "../../assets/images/pu3.png"

export default function FourthScreen() {
    return (
        <div className=' w-full py-14 bg-[#170031]  px-10' >
        <p className=' font-NotoSans-Bold text-3xl pb-10 text-left pl-4 text-[#FCFCFC]' >Popular collections</p>

            <div className=' w-full flex items-center text-[#cfc7d5] lg:mb-0 mb-8 ' > 
                <div className=' w-auto flex flex-1 px-4 font-NotoSans-Medium  ' >
                    <div className=' w-full flex flex-col items-center mx-2 ' >
                        <div className='w-full flex justify-center relative h-72' >
                                <img src={b1} className="w-full h-full object-cover" />
                            <div className=' w-28 h-28 absolute left-auto right-auto -bottom-8 rounded-full  ' >
                                <img src={u1} className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                        <p className='mt-10' >Bored apes</p>
                        <p className='' >by illiand</p>
                        <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                        <p className=' text-[#737373] my-1 text-center ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <button className=' font-NotoSans-Bold w-full bg-[#3C3C3C] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                            Buy Now 
                        </button> */}
                    </div>
                    <div className=' w-full flex flex-col items-center mx-2 ' >
                        <div className='w-full flex justify-center relative h-72' >
                                <img src={b2} className="w-full h-full object-cover" />
                            <div className=' w-28 h-28 absolute left-auto right-auto -bottom-8 rounded-full  ' >
                                <img src={u2} className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                        <p className='mt-10' >Bored apes</p>
                        <p className='' >by illiand</p>
                        <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                        <p className=' text-[#737373] my-1  text-center  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <button className=' font-NotoSans-Bold w-full bg-[#3C3C3C] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                            Buy Now 
                        </button> */}
                    </div>
                    <div className=' w-full flex flex-col font-NotoSans-SemiBold items-center mx-2 ' >
                        
                        <div className='w-full flex justify-center relative h-72' >
                                <img src={b3} className="w-full h-full object-cover" />
                            <div className=' w-28 h-28 absolute left-auto right-auto -bottom-8 rounded-full  ' >
                                <img src={u3} className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                        <p className='mt-10' >Bored apes</p>
                        <p className='' >by illiand</p>
                        <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p>
                        <p className=' text-[#737373] my-1 text-center ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        {/* <button className=' font-NotoSans-Bold w-full bg-[#3C3C3C] text-[#FCFCFC] h-12 mt-5 rounded-md ' >
                            Buy Now 
                        </button> */}
                    </div>
                </div> 
            </div>
        </div>
    )
} 