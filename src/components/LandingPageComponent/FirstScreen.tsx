import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from "../../assets/images/nftslider.png"
import SliderComponent from './SliderComponent';
import bg from "../../assets/images/gradient.png";

export default function FirstScreen() {
    return (
        <div className=' w-full flex text-[#fff] justify-center relative py-24  ' >
            <img src={bg} className='w-full h-full object-cover absolute inset-0'  />
            <div className=' w-full flex items-center z-20 pr-8  xl:pr-20 justify-end ' >
                <div className=' w-560px xl:w-700px  ' >
                    <p className=' text-sm font-NotoSans-Medium text-[#31CF99] ' >Hero NFT Marketplace</p>
                    <p style={{lineHeight: "85px", fontSize:"76px"}}  className='xl:flex hidden text-6xl font-NotoSans-Bold py-3  ' >Discover, collect & <br/> sell NFT digital art</p>
                    <p className='xl:hidden flex text-6xl leading-tight font-NotoSans-Bold py-3  ' >Discover, collect & <br/> sell NFT digital art</p>
                    <p  className=' text-base font-NotoSans-Medium '>Change the world with your NFTs <br/>Affect lives positively using NFT technology</p>
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
            <div className=' w-full xl:pl-20 pl-8 flex justify-start ' >
                <SliderComponent />  
            </div>
        </div>
    )
}  