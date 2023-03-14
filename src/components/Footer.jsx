import { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div className="footer bg-black">
                <div className="container-fluid text-white">
                    <h1>You're all set.</h1>
                    <p> The wise man therefore always holds in these matters to this principle of  selection.</p>
                    <div className="row credit text-center">
                        <div className="col-md-5">
                            <h5><span>wknd@</span>2020</h5>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <p>alpha version 0.1</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;