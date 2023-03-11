import { Component } from "react";
import start from '../images/tips/start.png';
import run from '../images/tips/run.png';
import denounce from '../images/tips/denounce.png';
import Content from "./Content";

class Contents extends Component{
    render(){
        const articles =[{image : start, title : 'Start quickly with simple steps'},
        {image : run, title : 'Run smoothly at vero eos et accusamus'},
        {image : denounce, title :'Denounce with righteous indignation'}]
        return(
            <div>
                <h2>POV</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <h2>Resource</h2>
                <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                <div>
                    {articles.map((article,index) =>{
                        return(
                            <Content img={article.image} title={article.title}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Contents;