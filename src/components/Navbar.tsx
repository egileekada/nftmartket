import React from 'react'

export default function Navbar() {
    return (
        <div className=' bg-[#100030] flex justify-between items-center w-full h-24 px-28  ' >
            <div className=' w-14 h-14 bg-blue-200 ' >

            </div>
            <div className=' flex items-center text-[#e9f7d7] font-NotoSans-Medium ' >
                <a className='  mx-3 ' >Explore</a>
                <a className='  mx-3 ' >Create</a>
                <a className='  mx-3 ' >Stats</a>
                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-40 mx-3  h-11 rounded-md ' >
                Connect wallet
                </button>
            </div>
        </div>
    )
} 