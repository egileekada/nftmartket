import React from 'react'
import Hero from "../../assets/images/nftslider.png"

export default function FirstScreen() {
    return (
        <div className=' w-full flex text-[#cfc7d5] items-center py-10 ' >
            <div className=' w-full flex items-center justify-center ' >
                <div className=' w-9/12 ' >
                    <p className=' text-base font-NotoSans-Medium  ' >Hero NFT Marketplace</p>
                    <p className=' text-5xl font-NotoSans-Bold py-1  ' >Discover, collect & sell NFT digital art</p>
                    <p  className=' text-base font-NotoSans-Medium '>Change the world with your NFTs Affect lives positively using NFT technology</p>
                    <div className=' w-full mt-8 flex font-NotoSans-SemiBold ' >
                        <button className=' bg-[#7a01d2] w-full mr-3  h-12 rounded-md ' >
                            Connect wallet
                        </button>
                        <button className=' bg-[#cfc7d5] border-1 border-[#D8D8D8] text-[#100030] w-full mx-3  h-12 rounded-md ' >
                            Connect wallet
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