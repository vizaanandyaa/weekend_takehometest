import { Component } from "react";

class Content extends Component{
    render() {
        return (
             <div>
                <img src={this.props.img} alt="" />
                <h4>{this.props.title}</h4>
             </div>
        );
    }
}

export default Content;