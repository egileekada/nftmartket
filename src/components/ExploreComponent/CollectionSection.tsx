import React from 'react'
import avatar from "../../assets/images/cu.png"
import cb1 from "../../assets/images/cb1.png"
import cb2 from "../../assets/images/cb2.png"
import cb3 from "../../assets/images/cb3.png"
import cb4 from "../../assets/images/cb4.png"
import cb5 from "../../assets/images/cb-5.png"
import cb6 from "../../assets/images/cb6.png"
import cb7 from "../../assets/images/cb7.png"
import cb8 from "../../assets/images/cb8.png"
import cb9 from "../../assets/images/cn9.png"
import { useNavigate } from 'react-router-dom'

export default function CollectionSection() {

    const navigate = useNavigate()

    const Collections =(item: any, user: any)=> {
        return( 
            <button className=' w-full flex flex-col items-center bg-[#352E65] pb-6 rounded-lg mx-2 ' >
                <div className='w-full flex justify-center relative h-40 rounded-t-lg' >
                        <img src={item} className="w-full h-full object-cover  rounded-t-lg" />
                    <div className=' w-28 h-28 absolute left-auto right-auto -bottom-12 rounded-full  ' >
                        <img src={user} className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
                <div className=' w-full flex flex-col items-center text-white px-6' >
                    <p className='mt-10 font-NotoSans-Bold text-lg ' >Bored apes</p>
                    <p className='font-NotoSans-Medium' >by <span className="text-[#31CF99]" >illiand</span></p>
                    {/* <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p> */}
                    <p className=' text-white my-1  text-center font-NotoSans-Medium  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                </div>
            </button> 
        )
    }
    
    return (
        <div className=' xl:w-1360px pb-10 ' >
            <div className='  w-full px-20 py-12' >
                <div className=' w-full justify-center flex text-[#4D0E7D] font-NotoSans-Bold text-xl ' >
                    <div className=' py-2 border-b-4 w-32 flex justify-center border-[#31CF99] ' >
                        <p >Trending</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Top</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Art</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Collectible</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Sports</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Music</p>
                    </div>
                    <div className=' py-2 border-b w-32 flex justify-center border-gray-300 ' >
                        <p >Utility</p>
                    </div>
                </div>
            </div>
            <div className=' w-full px-20 grid grid-cols-3 gap-6 ' >
                {Collections(cb1, avatar)}
                {Collections(cb2, avatar)}
                {Collections(cb3, avatar)}
                {Collections(cb4, avatar)}
                {Collections(cb5, avatar)}
                {Collections(cb6, avatar)}
                {/* {Collections(cb7, avatar)} */}
                {Collections(cb8, avatar)}
                {Collections(cb9, avatar)}
            </div>
        </div>
    )
} 