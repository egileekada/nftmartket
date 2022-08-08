import React from 'react'
import CollectionSection from '../components/ExploreComponent/CollectionSection'
import HeroSection from '../components/ExploreComponent/HeroSection'
import Navbar from '../components/Navbar'

export default function Explore() {
    return (
        <div className=' w-full ' >
            <div className=' w-full flex justify-center bg-[#100030] ' >
                <Navbar />
            </div>
            <div className='w-full' >
                <HeroSection />
            </div>
            <div className='w-full flex items-center flex-col' >
                <CollectionSection />
            </div>
        </div>
    )
} 