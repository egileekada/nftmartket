import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from "../../assets/images/nftslider.png"
import SliderComponent from './SliderComponent';
import bg from "../../assets/images/gradient.png";

export default function FirstScreen() {
    return (
        <div className=' w-full flex text-[#cfc7d5] justify-center relative py-24  ' >
            <img src={bg} className='w-full h-full object-cover absolute inset-0'  />
            <div className=' w-full flex items-center z-20 justify-end ' >
                <div className=' w-560px xl:w-600px  ' >
                    <p className=' text-base font-NotoSans-Medium text-[#31CF99] ' >Hero NFT Marketplace</p>
                    <p className=' text-6xl xl:text-7xl leading-tight font-NotoSans-Bold py-3  ' >Discover, collect & <br/> sell NFT digital art</p>
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
            <div className=' w-full pl-20 flex justify-start ' >
                <SliderComponent />  
            </div>
        </div>
    )
} 

{/* <div>
                                <div  className='relative w-full h-96 lg:h-70vh'>
                                    <Image src={Picture}  objectFit='cover' layout='fill'  /> 
                                    {/* <p className="legend">Legend 1</p> */}
                            //     </div>
                            // </div>
                            // <div>
                            //     <div  className='relative w-full h-96 lg:h-70vh'>
                            //         <Image src={Picture}  objectFit='cover' layout='fill'  />
                            //         {/* <p className="legend">Legend 1</p> */}
                            //     </div>
                            // </div>
                            // <div>
                            //     <div  className='relative w-full h-96 lg:h-70vh'>
                            //         <Image src={Picture}  objectFit='cover' layout='fill'  />
                            //         {/* <p className="legend">Legend 1</p> */}
                            //     </div>
                            // </div> */}