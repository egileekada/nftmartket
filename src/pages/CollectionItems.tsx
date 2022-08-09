import React from 'react'
import ActivityComponent from '../components/CollectionComponent/ActivityComponent'
import HeroSection from '../components/CollectionComponent/HeroSection'
import ItemComponent from '../components/CollectionComponent/ItemComponent'
import Navbar from '../components/Navbar'

export default function CollectionItems() {

    const [tab, setTab] = React.useState(false)

    return (
        <div className=' w-full bg-[#FBFBFB] ' >
            <div className=' w-full flex justify-center bg-[#fff] ' >
                <Navbar color={true} />
            </div>
            <div className=' w-full ' >
                <HeroSection />
            </div>
            <div className=' w-full flex flex-col my-10 items-center ' >
                <div className=' xl:w-1360px w-full flex items-center ' >
                    <div className='flex mx-8 items-center font-NotoSans-Bold' >
                        <button onClick={()=> setTab(false)} className={!tab ? ' border-b-4 pb-2 border-[#9C19FF] w-24 text-[#4D0E7D] ' : ' border-b-4 text-[#707070] border-transparent w-24'} >
                            <p>Items</p>
                        </button>
                    </div>
                    <div className='flex mx-8 items-center font-NotoSans-Bold' >
                        <button onClick={()=> setTab(true)} className={tab ? ' border-b-4 pb-2 border-[#9C19FF] w-24 text-[#4D0E7D] ' : ' border-b-4 text-[#707070] border-transparent w-24'} >
                            <p>Activity</p>
                        </button>
                    </div>
                </div>
                {!tab && ( 
                    <div className=' xl:w-1360px w-full mt-10 my-8 px-10' > 
                            <ItemComponent /> 
                    </div>
                )}
                {tab && ( 
                    <div className=' xl:w-1360px w-full mt-10 my-8 px-10' > 
                            <ActivityComponent /> 
                    </div>
                )}
            </div>
        </div>
    )
} 