import React from 'react'
import Navbar from '../Navbar'
import bg from "../../assets/images/gradient2.png"

export default function HeroSection(props: any) {
    return (
        <div className=' w-full flex justify-center relative bg-blue-500  ' >
        <img src={bg} className="w-full h-full inset-0 object-cover absolute" />
            <div className=' xl:w-1360px  w-full z-20 h-64 text-white  flex flex-col px-20 justify-center ' >
                <p className=' font-NotoSans-Bold text-3xl ' >{props.header}</p>
                <p className=' font-NotoSans-Medium text-base mt-1 ' >{props.body}</p>
            </div>
        </div>
    )
} 