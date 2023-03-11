import { Component } from "react";

class Content extends Component{
    render() {
        const {img,title} = this.props
        return (
             <div>
                <img src={img} alt="" />
                <h4>{title}</h4>
             </div>
        );
    }
}

export default Content;