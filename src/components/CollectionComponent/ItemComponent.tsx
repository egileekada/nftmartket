import { InputGroup, InputLeftElement, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import Pic from "../../assets/images/Cat.png"
import Solona from "../../assets/images/SoloColor.svg"

export default function ItemComponent() {

    const [isHovering, setIsHovering] = React.useState(-1)
    const array =[ "false", "true", "false", "false", "false", "false", "false", "true", "false", "true", ]

    const Items =(items: any, index: any)=> {
        return( 
            <div key={index} onMouseOver={()=> setIsHovering(index)} onMouseOut={()=> setIsHovering(-1)} className=' w-full h-fit bg-white shadow-2xl ' >
                <img src={Pic} className=' w-full h-64 object-cover ' />
                <div className=' px-6 bg-[#FFFFFF] pb-6 font-NotoSans-Regular  ' >
                    <p className=' font-NotoSans-Bold text-sm text-[#9C19FF] mt-3 ' >Bored cats #3321</p>
                    <p className=' text-[#707070] text-xs mt-3 ' >Price:</p>
                    <p className=' font-NotoSans-Bold text-center mt-1 text-lg flex items-center text-[#000] ' ><img src={Solona} className="mr-1 w-4" />0.166 <span className=' ml-2 text-[#707070] ' >(~$16.33)</span></p>
                    {isHovering === index && (
                        <>
                            {items === "false" ?  
                                <div className=" w-full mt-3 flex font-NotoSans-SemiBold text-sm " >
                                    <button className=" text-[#fff] mr-2 h-9  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-full ">Buy</button>
                                    <button className=" text-[#9C19FF] h-9 border border-[#9C19FF] ml-2 bg-white w-full " >Add To Cart</button>
                                </div>:
                                <div className=" w-full mt-3 flex font-NotoSans-SemiBold text-sm " >
                                    <button className=" text-[#fff] h-9  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-full ">Place Bid</button> 
                                </div>
                            }
                        </>
                    )}
                    {isHovering  !== index && (
                        <div className=" w-full h-9 flex items-end mt-3 " > 
                            <p className=' text-[#707070] text-xs  flex items-center ' >Last sale: <img src={Solona} className="mr-1 ml-2 w-3" />0.166 </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className=' w-full ' >
            <div className=' w-full font-NotoSans-Regular flex items-center ' >
                <div className=' flex flex-1 pr-8 ' >
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<IoIosSearch size={25} className='mt-2' color='#000' />}
                        />
                        <Input border="0px" fontSize="md"  size="lg" background="#EEEEEE" placeholder='Search' />
                    </InputGroup>
                </div> 
                <div className=' w-72 font-NotoSans-Bold text-[#000] ' >
                    <Select border="0px" size="lg" fontSize="md" background="#EEEEEE">
                        <option>Price low to high</option>
                        <option>Recently listed</option>
                        <option>Recently created</option>
                        <option>Recently sold</option>
                        <option>Recently received</option>
                        <option>Ending soon</option>
                        <option>Price low to high</option>
                        <option>Price high to low</option>
                        <option>Highest last sale</option>
                        <option>Most viewed</option>
                        <option>Most favorited</option>
                        <option>Oldest</option>
                    </Select>
                </div>
            </div>
            <div className=' w-full flex mt-8  ' >
                <div className=' w-72 text-[#000] ' >
                    <div className=' w-full py-8 px-6 bg-white rounded-md shadow-lg ' >
                        <p className=' font-NotoSans-Bold ' >Type</p>
                        <div className=' mt-4 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                            <p className=' font-NotoSans-Regular ' >Buy now</p>
                            <input type="checkbox" className=" bg-[#4D0E7D] w-5 h-5 " />
                        </div>
                        <div className=' mt-3 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                            <p className=' font-NotoSans-Regular ' >On Auction</p>
                            <input type="checkbox" className=" bg-[#4D0E7D] w-5 h-5 " />
                        </div>
                    </div>
                    <div className=' w-full py-8 mt-8 px-6 bg-white rounded-md shadow-lg ' >
                        <p className=' font-NotoSans-Bold mb-4 ' >Price</p>
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Bold' placeholder='SOL' backgroundColor="#EEEEEE" />
                        <div className=' w-full flex justify-between mt-3 ' > 
                            <button className='  bg-[#EEEEEE] w-16 h-11 flex justify-center rounded-md items-center ' >
                                <p className=' font-NotoSans-Regular text-[#707070] ' >Min</p> 
                            </button>
                            <button className='  bg-[#EEEEEE] w-16 h-11 flex justify-center rounded-md items-center ' >
                                <p className=' font-NotoSans-Regular text-[#707070] ' >Max</p> 
                            </button>
                        </div>
                        <button className=' h-11 w-full rounded-md bg-[#9C19FF] mt-3 text-white font-NotoSans-Bold ' >Apply</button>
                    </div>
                    <div className=' w-full font-NotoSans-Regular py-8 mt-8 px-6 bg-white rounded-md shadow-lg ' >
                        <p className=' font-NotoSans-Bold mb-4 ' >Properties</p>
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Regular mb-3' placeholder='Background' backgroundColor="#EEEEEE" />
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Regular mb-3' placeholder='Head' backgroundColor="#EEEEEE" />
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Regular mb-3' placeholder='Eyes' backgroundColor="#EEEEEE" />
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Regular' placeholder='Cloth' backgroundColor="#EEEEEE" />
                    </div>
                </div>
                <div className='flex flex-1 pl-6  ' >
                    <div className=' w-full grid grid-cols-3 gap-6 ' >
                        {array.map((items: any, index: any) => {
                            return(
                                <div>
                                    {Items(items, index)}
                                </div>
                            )
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )
} 