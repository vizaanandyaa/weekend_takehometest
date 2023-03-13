import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Test from './Test';
import {NextButton,PrevButton} from './Button'

const Testing = () =>{
    return(
        <div className="py-1 px-1 justify-content">
            <Swiper 
            freeMode ={true}
            grabCursor={true}
            modules ={[FreeMode]}
            className='mySwipper' 
            breakpoints={{
                480:{
                    slidesPerView : 2,
                    spaceBetween : 10,
                },
                1024:{
                    slidesPerView : 3,
                    spaceBetween : 10,
                }
            }}>
               <PrevButton/> 
                <SwiperSlide>
                    <Test/>
                </SwiperSlide>
                <SwiperSlide>
                    <Test/>
                </SwiperSlide>
                <SwiperSlide>
                    <Test/>
                </SwiperSlide>
                <SwiperSlide>
                <Test/>
                </SwiperSlide> 
                <NextButton/>
            </Swiper>
            
        </div>
    )
}

export default Testing;