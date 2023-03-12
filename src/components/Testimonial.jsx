import { Component } from "react";
import '../App.css'

class Testimonial extends Component{
    render(){
        const {title,desc} = this.props
        return(
            <div className="testimony">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        )
    }
}

export default Testimonial;