import { Component } from "react";
import profile from '../images/header/Bitmap.png'
import '../App.css'

class Home extends Component{
    render(){
        return(
            <div className="header container-fluid p-0">
                <div className="row my-3">
                    <div className="col-3 text-end p-0">
                        <img src={profile} alt="" />
                    </div>
                    <div className="col-9 p-0">
                        <div className="greetings">
                            <p>Good Morning</p>
                            <h5>Fellas</h5>
                        </div>
                    </div>
                </div>
                <div className="landing text-center">
                    <h1>WEEKEND FROM HOME</h1>
                    <p>Stay active with a little workout.</p>
                    <button>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default Home