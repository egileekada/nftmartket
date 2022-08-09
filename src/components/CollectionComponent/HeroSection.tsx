import React from 'react'
import discord from "../../assets/images/discord.svg"
import twitter from "../../assets/images/twitter.svg"
import instagram from "../../assets/images/instagram.svg"
import globe from "../../assets/images/globe.svg"
import star from "../../assets/images/star.svg"
import share from "../../assets/images/share.svg"
import more from "../../assets/images/more.svg"
import Solona from "../../assets/images/SoloColor.svg"
import { IoIosArrowDown } from 'react-icons/io'

export default function HeroSection() {
    return (
        <div className=' w-full flex flex-col items-center text-[#000] ' >
            <div className=' w-full h-64 relative flex justify-center bg-blue-500  ' > 
                <div className=' w-28 h-28 rounded-full bg-pink-300 shadow-xl mx-auto absolute -bottom-14 ' >

                </div>
            </div>
            <p className=' font-NotoSans-Bold text-3xl mt-20 flex items-center ' >FLUF World</p>
            <p className=' font-NotoSans-Medium my-2 flex items-center ' >By FLUF_World</p>
            <div className=' w-full relative flex my-6 justify-center items-center ' >
                 <button className=' w-7 h-7 mx-7 ' >
                     <img src={discord} className="w-full h-full" />
                 </button>
                 <button className=' w-7 h-7 mx-7 ' >
                     <img src={twitter} className="w-full h-full" />
                 </button>
                 <button className=' w-7 h-7 mx-7 ' >
                     <img src={instagram} className="w-full h-full" />
                 </button>
                 <button className=' w-7 h-7 mx-7 ' >
                     <img src={globe} className="w-full h-full" />
                 </button>
                 <div className=' absolute right-6 flex items-center ' > 
                    <button className=' w-7 h-7 mx-7 ' >
                        <img src={star} className="w-full h-full" />
                    </button>
                    <button className=' w-7 h-7 mx-7 ' >
                        <img src={share} className="w-full h-full" />
                    </button>
                    <button className=' w-7 h-7 mx-7 ' >
                        <img src={more} className="w-full h-full" />
                    </button>
                 </div>
            </div>
            <p className=' font-NotoSans-Regular text-[#707070] ' >Flufs are the collection that started it all. 10,000 3D rabbit avatars, programmatically-generated from over 270...</p>
            <button className=' flex items-center text-[#707070] font-NotoSans-Bold mt-3' >See more<IoIosArrowDown size={20} className="ml-1" /></button>
            <div className=' my-7 flex items-center ' >
                <div className='mx-10' >
                    <p className=' font-NotoSans-Bold text-center text-3xl ' >10k</p>
                    <p className=' font-NotoSans-Medium text-center' >items</p>
                </div>
                <div className='mx-10' >
                    <p className=' font-NotoSans-Bold text-center text-3xl ' >2.1k</p>
                    <p className=' font-NotoSans-Medium text-center' >owners</p>
                </div>
                <div className='mx-10 flex flex-col items-center' >
                    <p className=' font-NotoSans-Bold text-center text-3xl flex items-center ' ><img src={Solona} className="mr-1 w-6" />40</p>
                    <p className=' font-NotoSans-Medium text-center' >total volume</p>
                </div>
                <div className='mx-10 flex flex-col items-center'  >
                    <p className=' font-NotoSans-Bold text-center text-3xl flex items-center ' ><img src={Solona} className="mr-1 w-6" />3</p>
                    <p className=' font-NotoSans-Medium text-center' >floor price</p>
                </div>
            </div>
        </div>
    )
} 