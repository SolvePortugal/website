import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useParams} from 'react-router-dom'
import ProjectData from "./projects.json";



function CarouselComponent() {
    const{id}=useParams(); 
    return (
        <div>
            {ProjectData.map((postDetail,index)=>{
                
            if(postDetail.id===Number(id)){

                return  <div key={index} className="carousel-wrapper">
                <Carousel showThumbs={false} width="80%" showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} interval="6000" showArrows={true}>
                  {postDetail.slide.map(
                      (imagens,index)=>{
                        if(imagens.length > 0){
                          return<div key={index}>
                            <img key={index} className="carousell-img" src={imagens} alt={postDetail.id}/>
                          </div>
                        }
                  })}
                </Carousel>
              </div>
            }
        return null})}
        </div>
        
     
    );
  }

  export default CarouselComponent;