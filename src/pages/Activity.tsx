import { Select, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import HeroSection from '../components/ExploreComponent/HeroSection'
import Navbar from '../components/Navbar'
import Cart from "../assets/images/cart.png"
import hold from "../assets/images/holding.svg"
import link from "../assets/images/link.svg"
import price from "../assets/images/pricetag.svg"
import swap from "../assets/images/swap.svg"
import Solo from "../assets/images/SoloColor.svg"

export default function Activity() {
    return (
        <div className=' w-full ' >
            <div className=' w-full flex justify-center bg-[#fff] ' >
                <Navbar color={true} />
            </div>
            <div className='w-full' >
                <HeroSection header="Activity" body="View sales, listings and other activities on Hero" />
            </div>
        <div className=' w-full flex mt-8 px-6 ' >
            <div className=' w-72 text-[##000000] ' >
                <div className=' w-full py-8  px-6 bg-white rounded-md shadow-lg ' >
                    <p className=' font-NotoSans-Bold mb-4 ' >Price</p>
                    <Select fontSize="sm" size="lg" className='font-NotoSans-Bold' placeholder='Last 30 days' backgroundColor="#EEEEEE" /> 
                </div>
                <div className=' w-full py-8 px-6 mt-8 bg-white rounded-md shadow-lg ' >
                    <p className=' font-NotoSans-Bold ' >Filter</p>
                    <div className=' mt-4 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                        <p className=' font-NotoSans-Regular ' >Sales</p>
                        <input type="checkbox" className=" bg-[#000000] w-5 h-5 " />
                    </div>
                    <div className=' mt-3 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                        <p className=' font-NotoSans-Regular ' >Offers</p>
                        <input type="checkbox" className=" bg-[#000000] w-5 h-5 " />
                    </div>
                    <div className=' mt-3 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                        <p className=' font-NotoSans-Regular ' >Listings</p>
                        <input type="checkbox" className=" bg-[#000000] w-5 h-5 " />
                    </div>
                    <div className=' mt-3 bg-[#EEEEEE] px-4 rounded-md  h-11 flex justify-between items-center ' >
                        <p className=' font-NotoSans-Regular ' >Transfers</p>
                        <input type="checkbox" className=" bg-[#000000] w-5 h-5 " />
                    </div>
                </div>
            </div>
            <div className=' flex flex-col flex-1 pl-6 py-10 ' >
                {/* <div className=' w-full h-80 mb-10 bg-green-300 ' >
                </div> */}
                <TableContainer>
                    <Table variant="striped" colorScheme="gray"> 
                        <Thead>
                        <Tr className=' font-NotoSans-Bold text-[#000000] ' >
                            <Th></Th>
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>Item</p></Th>
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>Price</p></Th>
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>Qty</p></Th>
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>From</p></Th> 
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>To</p></Th>
                            <Th><p className=' font-NotoSans-Bold text-[#000000] '>Time</p></Th> 
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={Cart} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Sale</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={hold} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >offer</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={price} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >List</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={swap} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Transfer</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={Cart} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Sale</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={hold} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >offer</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={price} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >List</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        <Tr>
                            <Td> 
                                <div className=' flex items-center ' >
                                    <img alt="" src={swap} className="w-4 mr-2" />
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Transfer</p>
                                </div> 
                            </Td>
                            <Td>
                                <div className=' flex items-center ' >
                                    <div className=' w-12 h-12 rounded-full mr-2 bg-[#C2C2C2] ' >

                                    </div>
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm ' >Heartbreak ridge</p>
                                </div>
                            </Td>
                            <Td>
                                <div className=' flex items-center justify-center flex-col ' >
                                    <p className=' font-NotoSans-Regular text-[#000000] text-sm flex ' > <img alt="" src={Solo} className="w-4 mr-1" />3</p>
                                    <p className=' font-NotoSans-Regular text-[#707070] mt-2 text-sm '>$3,000</p>
                                </div>
                            </Td>
                            <Td><p className=' font-NotoSans-Regular text-[#000000] text-sm ' >1</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Namdjsdc</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm ' >Gudbdaa..</p></Td>
                            <Td><p className=' font-NotoSans-Regular text-[#4D0E7D] text-sm flex items-center ' >3 hours ago 
                                    <button><img alt="" src={link} className="w-6 ml-2" /></button></p></Td>
                        </Tr> 
                        </Tbody>
                    </Table>    
                </TableContainer>
            </div>
        </div>
        </div>
    )
} 