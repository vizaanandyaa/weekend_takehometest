import { Component } from "react";

class Content extends Component{
    render() {
        const {img,title} = this.props
        return (
             <div>
                <img src={img} alt="" />
                <h5>{title}</h5>
             </div>
        );
    }
}

export default Content;