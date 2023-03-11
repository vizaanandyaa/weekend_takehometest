import { Component } from "react";

class Testimonial extends Component{
    render(){
        const {title,desc} = this.props
        return(
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        )
    }
}

export default Testimonial;