import { Component } from "react";
import profile from '../images/header/Bitmap.png'
import '../App.css'

class Home extends Component{
    render(){
        return(
            <div className="header">
                <div className="container-fluid p-0 overflow-hidden">
                <div className="row my-3">
                    <div className="col-3 text-end p-0">
                        <img src={profile} alt="" />
                    </div>
                    <div className="col-9 p-0 greetings">
                        <p>Good Morning</p>
                        <h5>Fellas</h5>
                    </div>
                </div>
                <div className="landing text-center">
                    <h1>WEEKEND FROM HOME</h1>
                    <p>Stay active with a little workout.</p>
                    <button>Let's Go</button>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Home