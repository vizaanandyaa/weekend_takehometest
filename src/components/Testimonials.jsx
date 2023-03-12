import React,{useState,useEffect} from "react";
import axios from 'axios';
import Testimonial from "./Testimonial";
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

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
        <div className="testimonials">
            <h1 className="text-white">Testimonials</h1>
            <div className="testiWrapper">
                {testi.map((test => <Testimonial title={test.by} desc={test.testimony}/>))}       
            </div>
        </div>
    )
}

export default Testimonials

