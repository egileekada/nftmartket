import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Hero from "../../assets/images/nftslider.png"
import s1 from "../../assets/images/Slide1.png"
import s2 from "../../assets/images/Slide2.png"
import s3 from "../../assets/images/Slide3.png"

class SliderComponent extends Component {
    render() {
        return (
            <div className="relatives w-450px" > 
                <Carousel autoPlay infiniteLoop className=' w-450px   ' >
                    <div>
                        <div className='w-full rounded-lg'      >
                            <img src={s1} className=" w-450px rounded-lg "  />
                        </div>
                    </div>
                    <div>
                        <div className='w-full rounded-lg'  >
                            <img src={s2} className=" w-450px rounded-lg"  />
                        </div>
                    </div>
                    <div>
                        <div className='w-full rounded-lg'   >
                            <img src={s3} className=" w-450px rounded-lg "  />
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default SliderComponent;