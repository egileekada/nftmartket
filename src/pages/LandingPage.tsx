import React from 'react'
import FirstScreen from '../components/LandingPageComponent/FirstScreen'
import SecondScreen from '../components/LandingPageComponent/SecondScreen'
import ThirdScreen from '../components/LandingPageComponent/ThirdScreen'
import Navbar from '../components/Navbar'

export default function LandingPage() {
    return (
        <div className=' w-full h-screen bg-[#0c0026] ' >
            <div className=' h-auto w-full overflow-y-auto bg-[#0c0026]' >
                <div className=' w-full' >
                    <Navbar />
                </div>
                <div className=' w-full ' >
                    <FirstScreen />
                </div>
                <div className=' w-full ' >
                    <SecondScreen />
                </div>
                <div className=' w-full ' >
                    <ThirdScreen />
                </div>
            </div>
        </div>
    )
} 