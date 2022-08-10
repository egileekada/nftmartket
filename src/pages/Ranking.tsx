import { Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { link } from 'fs'
import React from 'react'
import HeroSection from '../components/ExploreComponent/HeroSection'
import Navbar from '../components/Navbar'
import Solona from "../assets/images/SoloColor.svg"

export default function Ranking() {
    return (
        <div className=' w-full ' >
            <div className=' w-full flex justify-center bg-[#fff] ' >
                <Navbar color={true} />
            </div>
            <div className='w-full' >
                <HeroSection header="Top NFTs" body="Top NFTs on Hero ranked by floor price, volume, etc." />
            </div>
            <div className=' w-full xl:w-1360px flex flex-col justify-center  ' >
                <div className=' w-full flex my-12 justify-center  ' >
                    <div className=' w-56 mx-6 ' >
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Bold' placeholder='Last 24 hours' backgroundColor="#EEEEEE" />
                    </div>
                    <div className=' w-56 mx-6  ' >
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Bold' placeholder='All Categories' backgroundColor="#EEEEEE" />
                    </div>
                    <div className=' w-56  mx-6  ' >
                        <Select fontSize="sm" size="lg" className='font-NotoSans-Bold' placeholder='All Chains' backgroundColor="#EEEEEE" />
                    </div>
                </div>
            </div>
            <div className=' w-full px-12 py-10 ' > 
                <TableContainer>
                    <Table variant="striped" colorScheme="gray"> 
                        <Thead>
                            <Tr className=' font-NotoSans-Bold text-[#000000] ' >
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>Collection</p></Th>
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>Floor price</p></Th>
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>Volume</p></Th>
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>24h%</p></Th>
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>7d%</p></Th> 
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>Owner</p></Th>
                                <Th><p className=' font-NotoSans-Bold text-[#000000] '>Item</p></Th> 
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td> 
                                    <div className=' flex items-center ' >  
                                        <div className=' w-12 h-12 rounded-full bg-green-400 mr-2 ' ></div>
                                        <p className=' font-NotoSans-Regular text-[#000000] text-base ' >Sale</p>
                                    </div> 
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />6</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />3000.5</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >3.6k</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >10k</p>
                                </Td> 
                            </Tr>  
                            <Tr>
                                <Td> 
                                    <div className=' flex items-center ' >  
                                        <div className=' w-12 h-12 rounded-full bg-green-400 mr-2 ' ></div>
                                        <p className=' font-NotoSans-Regular text-[#000000] text-base ' >Sale</p>
                                    </div> 
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />6</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />3000.5</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >3.6k</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >10k</p>
                                </Td> 
                            </Tr>  
                            <Tr>
                                <Td> 
                                    <div className=' flex items-center ' >  
                                        <div className=' w-12 h-12 rounded-full bg-green-400 mr-2 ' ></div>
                                        <p className=' font-NotoSans-Regular text-[#000000] text-base ' >Sale</p>
                                    </div> 
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />6</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />3000.5</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#FF0000]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#FF0000]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >3.6k</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >10k</p>
                                </Td> 
                            </Tr>  
                            <Tr>
                                <Td> 
                                    <div className=' flex items-center ' >  
                                        <div className=' w-12 h-12 rounded-full bg-green-400 mr-2 ' ></div>
                                        <p className=' font-NotoSans-Regular text-[#000000] text-base ' >Sale</p>
                                    </div> 
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />6</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' > <img src={Solona} className="w-4 mr-1" />3000.5</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#31CF99]  flex ' >+122.5%</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >3.6k</p>
                                </Td>
                                <Td>
                                    <p className=' font-NotoSans-Bold text-[#000000]  flex ' >10k</p>
                                </Td> 
                            </Tr>  
                        </Tbody>
                    </Table>    
                </TableContainer>
            </div>
        </div>
    )
}
