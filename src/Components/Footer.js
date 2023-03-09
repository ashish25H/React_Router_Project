import React from "react";
import Card from "./Card";
import img1 from '../assets/DataBatch.jpg';
import img2 from '../assets/javaBatch.jpg';
import img3 from '../assets/javascriptBatch.jpg';


const Footer = () =>{
    return(
        <div className="flex bg-[#03203C]">
        <Card  img={img1} alt='images' heading='Data Batch' teacherName='Krish Naik' price='3500'/>
        <Card  img={img2} alt='images' heading='Java Course' teacherName='Krish Naik' price='3500'/>
        <Card  img={img3} alt='images' heading='JavaScript Course' teacherName='hitesh choudhary' price='3500'/>
        </div>
    )
}

export default Footer;