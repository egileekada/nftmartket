import React from 'react'
import search from "../assets/images/search.svg"
import shop from "../assets/images/shop.svg"
import logo from "../assets/images/Logo.png"

export default function Navbar(props: any) {

    const [isHovering, setIsHovering] = React.useState(false)

    return (
        <div className=' xl:w-1360px flex justify-between items-center w-full h-24 xl:-px-0 px-10  ' >
            <a href='/' className=' text-2xl text-white font-NotoSans-ExtraBold ' ><img src={logo} alt="logo" className="w-11 h-11" /></a>
            <div className={!props.color ? ' flex items-center text-[#fff] font-NotoSans-Medium ' : ' flex items-center text-[#000] font-NotoSans-Medium '} >
                <a href='/explore'  className=' mx-6 ' >Explore</a>
                <a className=' mx-6 ' >Create</a>
                <div onMouseOver={()=> setIsHovering(true)} onMouseOut={()=> setIsHovering(false)} className='relative mx-6 ' >Stats
                    {isHovering && (
                        <div onMouseOver={()=> setIsHovering(true)} onMouseOut={()=> setIsHovering(false)} className=' w-28 font-NotoSans-SemiBold  bg-white shadow-xl flex flex-col py-4 border text-sm top-6 absolute z-30 -ml-9 ' >
                            <a href='/ranking' className='  text-center ' >Ranking</a>
                            <a href='/activity' className=' mt-3 text-center ' >Activity</a>
                        </div>
                    )}
                </div>
                <div className={props.color ? "w-10 h-10 mx-6 bg-[#E9D9F5] flex justify-center items-center rounded-full" : "w-10 h-10 mx-6 bg-[#352E65] flex justify-center items-center rounded-full"} >
                <svg id="Icon_" data-name="Icon " xmlns="http://www.w3.org/2000/svg"  width="20.916" height="20.056" viewBox="0 0 24 24">
                    <rect id="Area_ICON:feather_search_SIZE:LARGE_STYLE:STYLE1_" data-name="Area [ICON:feather/search][SIZE:LARGE][STYLE:STYLE1]" width="24" height="24" fill="#fcfcfc" opacity="0"/>
                    <g id="Icon" transform="translate(-1 -1)">
                        <circle id="Path" cx="8" cy="8" r="8" transform="translate(4 4)" fill="none" stroke={props.color ? "#000" :"#fff"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        <line id="Line" x1="4.35" y1="4.35" transform="translate(17.65 17.65)" fill="none" stroke={props.color ? "#000" :"#fff"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                    </g>
                    </svg>
                </div>
                <div className={props.color ? "w-10 h-10 mx-6 bg-[#E9D9F5] flex justify-center items-center rounded-full" : "w-10 h-10 mx-6 bg-[#352E65] flex justify-center items-center rounded-full"} >
                    {/* <img src={shop} className=" w-5  " /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.916" height="20.056" viewBox="0 0 20.916 20.056">
                        <g id="Icon_feather-shopping-cart" data-name="Icon feather-shopping-cart" transform="translate(-0.5 -0.5)">
                            <path id="Path_23" data-name="Path 23" d="M13.72,30.86a.86.86,0,1,1-.86-.86A.86.86,0,0,1,13.72,30.86Z" transform="translate(-4.481 -12.164)" fill="none" stroke={props.color ? "#000" :"#fff"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_24" data-name="Path 24" d="M30.22,30.86a.86.86,0,1,1-.86-.86A.86.86,0,0,1,30.22,30.86Z" transform="translate(-11.524 -12.164)" fill="none" stroke={props.color ? "#000" :"#fff"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                            <path id="Path_25" data-name="Path 25" d="M1.5,1.5H4.939l2.3,11.513A1.72,1.72,0,0,0,8.963,14.4H17.32a1.72,1.72,0,0,0,1.72-1.384L20.416,5.8H5.8" fill="none" stroke={props.color ? "#000" :"#fff"} stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </g>
                    </svg>
                </div>
                {/* <img src={shop} className=" w-7 mx-6 " /> */}
                <button className='  bg-gradient-to-r from-[#A100E2] via-[#7257CE] to-[#4E5FC0] w-40 ml-10 mx-3 text-white  h-11 rounded-md ' >
                Connect wallet
                </button>
            </div>
        </div>
    )
} 