import React from 'react'
import search from "../assets/images/search.svg"
import shop from "../assets/images/shop.svg"

export default function Navbar() {
    return (
        <div className=' bg-[#100030] flex justify-between items-center w-full h-24 px-28  ' >
            <p className=' text-2xl text-white font-NotoSans-ExtraBold ' >Hero</p>
            <div className=' flex items-center text-[#e9f7d7] font-NotoSans-Medium ' >
                <a href='/explore'  className=' mx-6 ' >Explore</a>
                <a className=' mx-6 ' >Create</a>
                <a className=' mx-6 ' >Stats</a>
                <img src={search} className=" w-7 mx-6 " />
                <img src={shop} className=" w-7 mx-6 " />
                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-40 ml-10 mx-3  h-11 rounded-md ' >
                Connect wallet
                </button>
            </div>
        </div>
    )
} 