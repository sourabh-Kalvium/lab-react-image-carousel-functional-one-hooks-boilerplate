import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    
    const [count,setCount]= useState(0)

    const showNext=()=>{
        if(count<images.length-1){
        setCount(count+1)
        }
    }

    const showPrevious=()=>{
        if(count>0){
        setCount(count-1)
        }
    }
    // function showPrevious() {
    //     setCount(count - 1);
    // }
   

    return(
    <div className="main">
        <div className="arrow"><ArrowBackIosIcon onClick={showPrevious} className="arrow-button" /></div>

        <div className="face-container" style={{ backgroundImage: `url(${images[count].img})` }}>

            <h1>{images[count].title}</h1>
            <p>{images[count].subtitle}</p>

        </div>

        <div className="arrow"><ArrowForwardIosIcon onClick={showNext} className="arrow-button" /></div>
    </div>
    )
}

export default Carousel;