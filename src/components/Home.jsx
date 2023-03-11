import { Component } from "react";
import profile from '../images/header/Bitmap.png'

class Home extends Component{
    render(){
        return(
            <div>
                <div className="header">
                    <img src={profile} alt="" />
                    <div className="greetings">
                        <p>Good Morning</p>
                        <h5> Fellas </h5>
                    </div>
                </div>
                <div className="landing">
                    <h1>WEEKEND FROM HOME</h1>
                    <p>Stay active with a little workout</p>
                    <button>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default Home