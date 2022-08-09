import React from 'react'
import search from "../assets/images/search.svg"
import shop from "../assets/images/shop.svg"
import logo from "../assets/images/Logo.png"

export default function Navbar(props: any) {
    return (
        <div className=' xl:w-1360px flex justify-between items-center w-full h-24 px-10  ' >
            <a href='/' className=' text-2xl text-white font-NotoSans-ExtraBold ' ><img src={logo} alt="logo" className="w-11 h-11" /></a>
            <div className=' flex items-center text-[#fff] font-NotoSans-Medium ' >
                <a href='/explore'  className=' mx-6 ' >Explore</a>
                <a className=' mx-6 ' >Create</a>
                <a className=' mx-6 ' >Stats</a>
                <div className="w-10 h-10 bg-[#352E65] mx-6  flex justify-center items-center rounded-full" >
                    <img src={search} className=" w-5 " />
                </div>
                <div className="w-10 h-10 mx-6 bg-[#352E65] flex justify-center items-center rounded-full" >
                    <img src={shop} className=" w-5  " />
                </div>
                {/* <img src={shop} className=" w-7 mx-6 " /> */}
                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-40 ml-10 mx-3  h-11 rounded-md ' >
                Connect wallet
                </button>
            </div>
        </div>
    )
} 