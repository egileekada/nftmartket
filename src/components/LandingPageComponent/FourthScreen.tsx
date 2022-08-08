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

            <div className=' w-full grid grid-cols-3 gap-6 text-[#cfc7d5] lg:mb-0 mb-8 ' > 
                {/* <div className=' w-auto flex flex-1 px-4 font-NotoSans-Medium  ' >   */}
                    <div className=' w-full flex flex-col font-NotoSans-Medium items-center mx-2 ' >
                        <img src={b1} className="w-full h-64 object-cover" />
                        <div className=' w-full flex items-center mt-5  ' >
                            <div className='flex items-center' >
                                <div className=' w-16 h-16  mr-4 rounded-full' >
                                    <img src={u1} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div> 
                                    <p>Creator</p>
                                    <p className=' font-NotoSans-Bold mt-2 text-xl ' >Tom Haffty</p>
                                </div>
                            </div>
                                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-28 ml-auto mx-3  h-11 rounded-md ' >
                                    Item 162
                                </button>
                        </div>
                    </div>
                    <div className=' w-full flex flex-col font-NotoSans-Medium items-center mx-2 ' >
                        <img src={b2} className="w-full h-64 object-cover" />
                        <div className=' w-full flex items-center mt-5  ' >
                            <div className='flex items-center' >
                                <div className=' w-16 h-16  mr-4 rounded-full' >
                                    <img src={u2} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div> 
                                    <p>Creator</p>
                                    <p className=' font-NotoSans-Bold mt-2 text-xl ' >Tom Haffty</p>
                                </div>
                            </div>
                                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-28 ml-auto mx-3  h-11 rounded-md ' >
                                    Item 162
                                </button>
                        </div>
                    </div>
                    <div className=' w-full flex flex-col font-NotoSans-Medium items-center mx-2 ' >
                        <img src={b3} className="w-full h-64 object-cover" />
                        <div className=' w-full flex items-center mt-5  ' >
                            <div className='flex items-center' >
                                <div className=' w-16 h-16  mr-4 rounded-full' >
                                    <img src={u3} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <div> 
                                    <p>Creator</p>
                                    <p className=' font-NotoSans-Bold mt-2 text-xl ' >Tom Haffty</p>
                                </div>
                            </div>
                                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-28 ml-auto mx-3  h-11 rounded-md ' >
                                    Item 162
                                </button>
                        </div>
                    </div>
                {/* </div>  */}
            </div>
        </div>
    )
}  