import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../images/header/Bitmap.png'
import '../App.css'

function Home(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
        return(
            <div className="header">
                <div className="container-fluid p-0 overflow-hidden">
                <div className="row my-3">
                    <div className="col-3 text-end p-0">
                        <img src={profile} alt="" />
                    </div>
                    <div className="col-9 p-0 greetings">
                        <p>Good Morning</p>
                        <h5>Fellas</h5>
                    </div>
                </div>
                <div className="landing text-center">
                    <h1 data-aos="fade-up">WEEKEND FROM HOME</h1>
                    <p data-aos="fade-up">Stay active with a little workout.</p>
                    <button data-aos="fade-up">Let's Go</button>
                </div>
            </div>
            </div>
            
        )
    
}

function About(){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
    const text ="a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something,such as a mine) by working to devise, arrange or achieve by resolving difficulties."
    return(
        <div className="about">
            <div className="aboutWrap text-end" data-aos="fade-right">
                <p><span>Deffinition;</span>{text} <br/> Merriam-Webster.com Dictionary.</p>
                <h5 className="text-white">-weekend team</h5>
            </div>
        </div>
    )

}


export {Home, About}