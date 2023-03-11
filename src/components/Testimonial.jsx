import { Component } from "react";

class Testimonial extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Testimonial;