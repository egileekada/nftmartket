import React from 'react'
import c1 from "../../assets/images/c1.png"
import c2 from "../../assets/images/c2.png"
import c3 from "../../assets/images/c3.png"
import c4 from "../../assets/images/c4.png"
import c5 from "../../assets/images/c5.png"
import c6 from "../../assets/images/c6.png"
import c7 from "../../assets/images/c7.png"
import c8 from "../../assets/images/c8.png"
import bg from "../../assets/images/gradient2.png"
import c9 from "../../assets/images/c9.png"

export default function FifthScreen() {

    const Item =(url: any, name: any)=> {
        return(
            <button className='w-full flex bg-[#352E65] flex-col px-4 items-center ' >
                <div className=' w-full py-4 h-72 flex items-center   ' >
                    <img src={url} className=' w-full h-full object-cover' />
                </div>
                <div className=' text-[#FCFCFC] w-full flex items-center justify-center my-3 mb-4  ' >
                    <p className=' font-NotoSans-Medium  ' >{name}</p>
                    {/* <a className=' font-NotoSans-Medium text-lg' >View All</a> */}
                </div>
            </button>
        )
    }

    return (
        <div className=' relative w-full flex  xl:px-20  justify-center ' > 
            <img src={bg} className="w-full h-full inset-0 object-cover absolute" /> 
            <div className='w-full z-10 py-16 flex flex-col justify-center items-center ' > 
                <p className=' font-NotoSans-Bold text-3xl text-center text-[#FCFCFC]' >Browse by category</p>
                <div className=' w-28 bg-white mb-20 mx-auto mt-4 ' style={{height: "2px"}} ></div>
                <div className=' w-full grid px-10 gap-6 grid-cols-3 ' > 
                {Item(c1, "Art")}
                {Item(c2, "Collectible")}
                {Item(c3, "Sports")}
                {Item(c4, "Domain Names")}
                {Item(c5, "Music")}
                {Item(c6, "Utility")}
                {Item(c7, "Photography")}
                {Item(c8, "Trading Cards")}
                {Item(c9, "Virtual Worlds")}
                </div>
            </div>
        </div>
    )
} 