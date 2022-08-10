import { Input, Select, Textarea } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../components/ExploreComponent/HeroSection'
import Navbar from '../components/Navbar'

export default function CreateNft() {
    return (
        <div className=' w-full bg-[#FBFBFB] ' >
            <div className=' w-full flex justify-center bg-[#fff] ' >
                <Navbar color={true} />
            </div>
            <div className=' w-full ' >
                <HeroSection header="Create" body="Create a new item for your collection" />
            </div> 
            <div className=' w-full flex justify-center ' > 
                <div className=' w-full xl:px-0 px-10 xl:w-1360px flex mt-12  ' >
                    <div className=' w-80 text-[#000000] ' >
                        <div className=' w-full py-8 flex flex-col ' >
                            <p className=' font-NotoSans-Bold mb-4 text-2xl ' >Preview item</p>
                            <div className=' w-full h-56 bg-blue-500 ' >

                            </div>
                            <p className=' font-NotoSans-SemiBold mb-5 text-center mt-4 ' >Lorem Ipsum Dolor</p>
                            <p className=' font-NotoSans-Medium text-[#737373] text-center mb-6 ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-36 font-NotoSans-Medium text-white mx-auto  h-11 ' >
                                Buy Now
                            </button>
                        </div> 
                    </div>
                    <div className=' flex flex-col flex-1 ml-16  text-sm font-NotoSans-Bold bg-white px-12 py-8 shadow-lg ' >
                        <p className=' font-NotoSans-Bold text-2xl ' >Create new NFT</p>
                        <div className=' py-4 flex ' >
                            <p className=' font-NotoSans-Medium '><span className=' font-NotoSans-Bold text-xs mr-1 text-[#FF0000]' >*</span>Required</p>
                            <p className=' font-NotoSans-Medium ml-8 '><span className=' font-NotoSans-Bold text-xs mr-1 text-[#00FF00]' >*</span>Optional</p>
                        </div>
                        <p className=' ' >Upload a file (image, audio, video or 3D file)</p>
                        <button className=' w-40 text-white bg-[#3C3C3C] my-2 h-11 text-sm ' >Choose file</button>
                        <p className=' text-sm text-[#707070] font-NotoSans-Regular ' >File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</p>
                        <p className='mt-4 mb-2 font-NotoSans-Medium ' >Name<span className=' font-NotoSans-Bold text-xs ml-1 text-[#FF0000]' >*</span></p>
                        <Input className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Item name"  />
                        <p className='mt-4 mb-2 font-NotoSans-Medium' >External link<span className=' font-NotoSans-Bold text-xs ml-1 text-[#00FF00]' >*</span></p>
                        <Input className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Item name"  />
                        <p className='mt-4 mb-2 font-NotoSans-Medium' >Description<span className=' font-NotoSans-Bold text-xs ml-1 text-[#00FF00]' >*</span></p>
                        <Textarea height="100px" className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Write a description for the item"  />
                        <p className='mt-4 mb-2 font-NotoSans-Medium' >Collection<span className=' font-NotoSans-Bold text-xs ml-1 text-[#00FF00]' >*</span></p>
                        <Select className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Select collection to add item"  />
                        <p className='mt-4 mb-2 font-NotoSans-Medium' >Properties<span className=' font-NotoSans-Bold text-xs ml-1 text-[#00FF00]' >*</span></p>
                        <div className=' flex w-full ' >
                            <div className=' w-full pr-2 ' >
                                <Select className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Type"  />
                                <p className=' font-NotoSans-Regular text-xs text-[#707070] mt-1 ' >example: Eyes</p>
                            </div>
                            <div className=' w-full pl-2 ' >
                                <Select className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Name"  />
                                <p className=' font-NotoSans-Regular text-xs text-[#707070] mt-1 ' >example: Blue</p>
                            </div>
                        </div>
                        <button className=' w-40 text-white bg-[#3C3C3C] mt-4 h-11 text-sm ' >Add new property</button>
                        <p className='mt-4 mb-2 font-NotoSans-Medium ' >Explicit content<span className=' font-NotoSans-Bold text-xs ml-1 text-[#FF0000]' >*</span></p>
                        <div className=' w-full h-12 rounded-md flex items-center justify-between bg-[#EEEEEE] px-3 ' >
                            <p className=' font-NotoSans-Regular text-sm text-[#707070]' >Mark this item as explicit or adult or sensitive content</p>
                            <input className='w-4 h-4 ' type="checkbox" />
                        </div>
                        <p className='mt-4 mb-2 font-NotoSans-Medium ' >Supply<span className=' font-NotoSans-Bold text-xs ml-1 text-[#FF0000]' >*</span></p>
                        <Input className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Number of items that can be minted"  />
                        <p className='mt-4 mb-2 font-NotoSans-Medium' >Blockchain<span className=' font-NotoSans-Bold text-xs ml-1 text-[#FF0000]' >*</span></p>
                        <Input className=' font-NotoSans-Medium' size="lg" fontSize="sm" background="#EEEEEE" placeholder="Solana"  />
                        <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-36 font-NotoSans-Medium text-white mx-auto mt-6 h-11 ' >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 