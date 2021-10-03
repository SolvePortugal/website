import React from 'react';
import './template.css';
import Footer from './footer'
import {useParams} from 'react-router-dom'
import ProjectData from "./projects.json";
import CarouselComponent from "./carrosell";


function Template() {
    const{id}=useParams(); 
  return (
    <div>
        <div className="projselected">
            {ProjectData.map((postDetail,index)=>{
                if(postDetail.id===Number(id)){
                    return <div key={index} className="information">
                        <div className="top">
                            <img src={postDetail.img}alt="tech"/>   
                        </div>
                        <div className="boxes">
                            <div className="darkblue">
                                <img src={postDetail.img}alt="tech"/> 
                                <h1>Descrição:</h1>
                                <p>{postDetail.descricao}</p>  
                            </div>
                            <div className="lightblue">
                                <h1>Membros:</h1>
                                <p>{postDetail.members}</p> 
                            </div>
                            
                        </div>
                        <div className="slider">
                            < CarouselComponent/>
                        </div>
                    </div>
                }
             return null})}
        </div>
        <Footer/>
    </div>
    
  );
}

export default Template;
