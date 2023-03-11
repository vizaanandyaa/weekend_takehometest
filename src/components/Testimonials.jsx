import { Component } from "react";
import Testimonial from "./Testimonial";

class Testimonials extends Component{
    render(){
        const datas = [{title : 'Blu Kicks', desc : 'Places where you can leverage tools and software to free up time to focus on growing the business.'},
    {title : 'Angelus', desc : 'All those apps took me months to get running. Now the site practically runs itself!'},
    {title : 'SoYoung', desc : 'Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction'}]
        return(
            <div>
                {datas.map((data,index)=>{
                    return(
                        <Testimonial key={index} title={data.title} desc={data.desc}/>
                    )
                })}
            </div>
        )
    }
}

export default Testimonials