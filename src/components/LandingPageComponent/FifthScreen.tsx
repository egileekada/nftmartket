import React from 'react'
import c1 from "../../assets/images/c1.png"
import c2 from "../../assets/images/c2.png"
import c3 from "../../assets/images/c3.png"
import c4 from "../../assets/images/c4.png"
import c5 from "../../assets/images/c5.png"
import c6 from "../../assets/images/c6.png"
import c7 from "../../assets/images/c7.png"
import c8 from "../../assets/images/c8.png"
import c9 from "../../assets/images/c9.png"

export default function FifthScreen() {

    const Item =(url: any, name: any)=> {
        return(
            <button className='w-full flex flex-col items-center ' >
                <div className=' w-full py-6 h-72 rounded-md px-6 flex items-center   ' >
                    <img src={url} className=' w-full h-full rounded-md object-cover' />
                </div>
                <p className='text-[#FCFCFC] font-NotoSans-Medium mt-3  ' >{name}</p>
            </button>
        )
    }

    return (
        <div  className='w-full py-16 flex flex-col justify-center items-center ' > 
            <p className=' font-NotoSans-Bold text-3xl pb-10 text-center text-[#FCFCFC]' >Top collections over last 24 hours</p>
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
    )
} 