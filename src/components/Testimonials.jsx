import React,{useState,useEffect} from "react";
import axios from 'axios';
import Testimonial from "./Testimonial";

function Testimonials(){
    const [testi,setTesti] = useState([])

    useEffect(()=>{
        axios.get('https://challenge.fe.weekendinc.com/testimonial')
        .then(res =>{
            console.log(res)
            setTesti(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    return(
        <div>
            {testi.map((test => <Testimonial title={test.by} desc={test.testimony}/>))}
        </div>
    )
}

export default Testimonials

