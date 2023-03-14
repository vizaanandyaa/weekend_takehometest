import { Component } from "react";
import '../App.css'

class Content extends Component{
    render() {
        const {img,title} = this.props
        return (
             <div className="contentWrapper">
                <img src={img} alt="" />
                <div className="contentDesc bg-dark bg-opacity-50">
                  <h5>{title}</h5>
                  <button></button>
                </div>
             </div>
        );
    }
}

export default Content;