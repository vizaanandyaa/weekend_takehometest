import { Component } from "react";

class About extends Component{
    render(){
        const text ="a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something,such as a mine) by working to devise, arrange or achieve by resolving difficulties."
        return(
            <div className="about">
                <p><span>Deffinition;</span>{text} <br/> Merriam-Webster.com Dictionary.</p>
                <h5>-weekend team</h5>
            </div>
        )
    }
}

export default About;