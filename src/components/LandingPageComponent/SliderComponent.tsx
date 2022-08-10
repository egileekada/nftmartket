import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from "../../assets/images/nftslider.png"
import s1 from "../../assets/images/Slide1.png"
import s2 from "../../assets/images/Slide2.png"
import s3 from "../../assets/images/Slide3.png"
// import OwlCarousel from 'react-owl-carousel2';
// import 'react-owl-carousel2/style.css';


export default function SliderComponent() {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
    
    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };
    return(
                    <div className="relatives w-560px xl:w-600px" > 
                        <Carousel ariaLabel="" autoPlay infiniteLoop className='  w-560px xl:w-600px   ' >
                            <div>
                                <div className='w-full rounded-lg'      >
                                    <img src={s1} className="  w-560px xl:w-600px rounded-lg "  />
                                </div>
                            </div>
                            <div>
                                <div className='w-full rounded-lg'  >
                                    <img src={s2} className="  w-560px xl:w-600px rounded-lg"  />
                                </div>
                            </div>
                            <div>
                                <div className='w-full rounded-lg'   >
                                    <img src={s3} className="  w-560px xl:w-600px rounded-lg "  />
                                </div>
                            </div>
                        </Carousel>
                    </div>
    )
}

// class SliderComponent extends Component {
//     const options = {
//     items: 1,
//     nav: true,
//     rewind: true,
//     autoplay: true
// };
 
//     render() {
//         return (
//             <div className="relatives w-560px xl:w-560px" > 
//                 <Carousel ariaLabel="" autoPlay infiniteLoop className=' w-560px   ' >
//                     <div>
//                         <div className='w-full rounded-lg'      >
//                             <img src={s1} className=" w-450px rounded-lg "  />
//                         </div>
//                     </div>
//                     <div>
//                         <div className='w-full rounded-lg'  >
//                             <img src={s2} className=" w-450px rounded-lg"  />
//                         </div>
//                     </div>
//                     <div>
//                         <div className='w-full rounded-lg'   >
//                             <img src={s3} className=" w-450px rounded-lg "  />
//                         </div>
//                     </div>
//                 </Carousel>
//             </div>
//         );
//     }
// }

// export default SliderComponent;