import React from "react";
import {useSwiper} from 'swiper/react';

const NextButton =() =>{
    const swiper = useSwiper();

    return(
        <div className="swiper-nav-btn nextbuttonNav">
            <button onClick={()=>swiper.slideNext()}></button>
        </div>
    )
}

const PrevButton =() =>{
    const swiper = useSwiper();

    return(
        <div className="swiper-nav-btn prevbuttonNav">
            <button onClick={()=>swiper.slidePrev()}></button>
        </div>
    )
}
export {NextButton,PrevButton};