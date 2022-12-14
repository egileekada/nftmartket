import React from 'react'
import Footer from '../components/Footer'
import FifthScree from '../components/LandingPageComponent/Collection'
import FirstScreen from '../components/LandingPageComponent/FirstScreen'
import FourthScreen from '../components/LandingPageComponent/FourthScreen'
import SecondScreen from '../components/LandingPageComponent/SecondScreen'
import ThirdScreen from '../components/LandingPageComponent/ThirdScreen'
import Navbar from '../components/Navbar'

export default function LandingPage() {
    return (
        <div className=' w-auto h-auto relative flex flex-col items-center overflow-y-auto overflow-x-hidden bg-[#0c0026] ' >
            <div className=' h-auto  w-full overflow-x-hidden  bg-[#07012F]' >
                <div className=' w-full flex justify-center bg-[#07012F] ' >
                    <Navbar />
                </div>
                <div className='  w-full flex justify-center ' >
                    <FirstScreen />
                </div>
                <div className=' w-full ' >
                    <SecondScreen />
                </div>
                <div className=' w-full  ' >
                    <ThirdScreen />
                </div>
                {/* <button className=' fixed  bottom-44 bg-[#7ECD4E] right-12 z-50 font-NotoSans-SemiBold py-2 text-white w-36 shadow-2xl rounded-3xl' >Buy Now</button> */}
                <div className=' w-full bg-[#060125] ' >
                    <FourthScreen />
                </div>
                <div className=' w-full ' >
                    <FifthScree />
                </div>
                <div className=' w-full ' >
                    <Footer />
                </div>
            </div>
        </div>
    )
} 