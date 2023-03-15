import React,{useState,useEffect} from "react";
import axios from 'axios';
import Testimonial from "./Testimonial";
import '../App.css'
import { Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import 'bootstrap/dist/css/bootstrap.min.css'
import {NextButton,PrevButton} from './Button'

function Testimonials(){
    const [testi,setTesti] = useState([])

    useEffect(()=>{
        axios.get('https://challenge.fe.weekendinc.com/testimonial')
        .then(res =>{
            setTesti(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    });
    return(
        <div className="testimonials py-1 px-1 justify-content">
            <h1 className="text-white my-4">Testimonials</h1>
            <Swiper 
            freeMode ={true}
            grabCursor={true}
            modules ={[FreeMode]}
            className='mySwipper'
            breakpoints={{
                375:{
                    slidesPerView : 1,
                    spaceBetween : 10,
                },
                480:{
                    slidesPerView : 1,
                    spaceBetween : 10,
                },
                1024:{
                    slidesPerView : 3,
                    spaceBetween : 10,
                }
            }}>
               <PrevButton/> 
               {testi.map((test) => {
                    return(
                        <SwiperSlide>
                            <Testimonial title={test.by} desc={test.testimony}/>
                        </SwiperSlide> 
                    )
                })}
                <NextButton/>
            </Swiper>
            
        </div>
    )
}

export default Testimonials

