import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link, useParams} from 'react-router-dom'
import ProjectData from "./projects.json";



function CarouselComponent() {
    const{id}=useParams(); 
    return (
        <div>
            {ProjectData.map((postDetail,index)=>{
                
            if(postDetail.id==id){

                return  <div className="carousel-wrapper">
                <Carousel showThumbs={false} width="80%" showStatus={false} dynamicHeight={true} autoPlay={true} infiniteLoop={true} interval="6000" showArrows={false}>
                  {postDetail.slide.map(
                      (imagens,index)=>{
                      return<div>
                            <img className="carousell-img" src={imagens} />
                      </div>
                  })}
                </Carousel>
              </div>
            }
        })}
        </div>
        
     
    );
  }

  export default CarouselComponent;