import React,{useState,useEffect} from "react";
import Content from "./Content";
import axios from "axios";


function Contents(){
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        axios.get('https://challenge.fe.weekendinc.com/help-tips')
        .then(res =>{
            setArticles(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })

    return(
        <div>
            <h2>POV</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <h2>Resource</h2>
            <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
            <div>
            {articles.map((article =><Content img={article.image} title={article.title}/>))}
            </div>
        </div>
    )
}

export default Contents