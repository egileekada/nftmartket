import React from 'react'
import Hero from "../../assets/images/nftslider.png"

export default function FirstScreen() {
    return (
        <div className=' w-full flex text-[#cfc7d5] items-center py-24 ' >
            <div className=' w-full flex items-center justify-center ' >
                <div className=' w-9/12 ' >
                    <p className=' text-base font-NotoSans-Medium  ' >Hero NFT Marketplace</p>
                    <p className=' text-5xl font-NotoSans-Bold py-1  ' >Discover, collect & sell NFT digital art</p>
                    <p  className=' text-base font-NotoSans-Medium '>Change the world with your NFTs Affect lives positively using NFT technology</p>
                    <div className=' w-auto mt-8 flex font-NotoSans-SemiBold ' >
                        <button className=' hover:from-[#4E5FC0] hover:to-[#A100E2] bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-40 mr-3  h-12 rounded-md ' >
                            Explore
                        </button>
                        <button className=' bg-[#433157] hover:bg-gradient-to-r  hover:from-[#4E5FC0] hover:to-[#A100E2] text-[#cfc7d5] w-40 mx-3  h-12 rounded-md ' >
                        Create NFT
                        </button>
                    </div>
                </div>
            </div>
            <div className=' w-full flex items-center justify-center ' >
                <img src={Hero} className=" w-9/12 "  />
            </div>
        </div>
    )
} 