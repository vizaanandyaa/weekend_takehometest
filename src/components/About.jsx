import { Component } from "react";
import '../App.css'

class About extends Component{
    render(){
        const text ="a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something,such as a mine) by working to devise, arrange or achieve by resolving difficulties."
        return(
            <div className="about">
                <div className="aboutWrap text-end mx-auto">
                    <p><span>Deffinition;</span>{text} <br/> Merriam-Webster.com Dictionary.</p>
                    <h5 className="text-white">-weekend team</h5>
                </div>
            </div>
        )
    }
}

export default About;