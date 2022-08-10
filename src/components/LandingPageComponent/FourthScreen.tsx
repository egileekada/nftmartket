import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import b1 from "../../assets/images/phi1.png"
import b2 from "../../assets/images/phi2.png"
import b3 from "../../assets/images/phi3.png"
import u1 from "../../assets/images/pu1.png"
import u2 from "../../assets/images/pu2.png"
import u3 from "../../assets/images/pu3.png"

export default function FourthScreen() {

    const ref: any = React.useRef(null);  
    const scroll = (scrolloffset : any ) =>{
        ref.current.scrollLeft += scrolloffset 
    };        

    const Collections =(item: any, user: any)=> {
        return( 
            <button className=' w-500px flex flex-col items-center bg-[#352E65] pb-6 rounded-lg mx-2 ' >
                <div className='w-full flex justify-center relative h-56 p-2 rounded-t-lg' >
                        <img src={item} className="w-full h-full object-cover  rounded-t-lg" />
                    <div className=' w-28 h-28 absolute left-auto right-auto -bottom-12 rounded-full  ' >
                        <img src={user} className="w-full h-full object-cover rounded-full" />
                    </div>
                </div>
                <div className=' w-full flex flex-col items-center text-white px-6' >
                    <p className='mt-10 font-NotoSans-Bold text-lg ' >Bored apes</p>
                    <p className='font-NotoSans-Medium' >by <span className="text-[#31CF99]" >illiand</span></p>
                    {/* <p className=' font-NotoSans-Bold mt-3  ' >Lorem Ipsum Dolor</p> */}
                    <p className=' text-white my-1  text-center font-NotoSans-Medium  ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                </div>
            </button> 
        )
    }

    return (
        <div className="w-full flex justify-center" > 
            <div className=' w-full py-20 xl:px-20 px-10' >
                <div className='w-full flex items-center pb-10 justify-between '  > 
                    <div className='' > 
                        <p className=' font-NotoSans-Bold text-3xl text-left pl-4 text-[#FCFCFC]' >Popular collections</p>
                        <div className=' w-28 bg-white mb-20 mt-4 ml-4' style={{height: "2px"}} ></div>
                    </div>
                    <div className="flex items-center text-[#C2C2C2] " > 
                        <button onClick={()=> scroll(-500)}  className=' w-12 h-12 flex justify-center items-center pr-1 rounded-full bg-[#352E65] ' >
                            <IoIosArrowBack size={30} />
                        </button>
                        <button onClick={()=> scroll(500)}  className=' w-12 h-12 ml-4 flex justify-center items-center pl-1 rounded-full bg-[#352E65] ' >
                            <IoIosArrowForward size={30} />
                        </button>
                    </div>
                </div>
                    <div ref={ref} className='w-full flex flex-row mx-4 overflow-x-auto scroll_event'>
                        <div className='flex flex-row  '>
                    {/* <div className=' w-auto flex flex-1 px-4 font-NotoSans-Medium  ' >   */}
                    {Collections(b1, u1)}
                    {Collections(b2, u2)}
                    {Collections(b3, u3)}
                    {Collections(b1, u1)}
                    {Collections(b2, u2)}
                    {Collections(b3, u3)}
                        
                        {/* <div className=' w-full flex flex-col font-NotoSans-Medium items-center mx-2 ' >
                            <img src={b2} className="w-full h-64 object-cover" />
                            <div className=' w-full flex items-center mt-5  ' >
                                <div className='flex items-center' >
                                    <div className=' w-16 h-16  mr-4 rounded-full' >
                                        <img src={u2} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div> 
                                        <p>Creator</p>
                                        <p className=' font-NotoSans-Bold mt-2 text-xl ' >Tom Haffty</p>
                                    </div>
                                </div>
                                    <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-28 ml-auto mx-3  h-11 rounded-md ' >
                                        Item 162
                                    </button>
                            </div>
                        </div>
                        <div className=' w-full flex flex-col font-NotoSans-Medium items-center mx-2 ' >
                            <img src={b3} className="w-full h-64 object-cover" />
                            <div className=' w-full flex items-center mt-5  ' >
                                <div className='flex items-center' >
                                    <div className=' w-16 h-16  mr-4 rounded-full' >
                                        <img src={u3} className="w-full h-full object-cover rounded-full" />
                                    </div>
                                    <div> 
                                        <p>Creator</p>
                                        <p className=' font-NotoSans-Bold mt-2 text-xl ' >Tom Haffty</p>
                                    </div>
                                </div>
                                    <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-28 ml-auto mx-3  h-11 rounded-md ' >
                                        Item 162
                                    </button>
                            </div>
                        </div> */}
                    </div> 
                </div>
            </div>
        </div>
    )
}  