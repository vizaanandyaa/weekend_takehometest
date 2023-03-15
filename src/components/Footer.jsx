import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

function Footer (){
    useEffect(()=>{
        AOS.init({duration:2000})
    },[]);

        return(
            <div className="footer bg-black">
                <div className="container-fluid text-white">
                    <h1 data-aos="zoom-in">You're all set.</h1>
                    <p data-aos="zoom-in"> The wise man therefore always holds in these matters to this principle of  selection.</p>
                    <div className="row credit text-center">
                        <div className="col-6">
                            <h5><span>wknd@</span>2020</h5>
                        </div>
                        <div className="col-6">
                            <p>alpha version 0.1</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default Footer;