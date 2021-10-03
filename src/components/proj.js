import React from 'react';
import './proj.css';
import Footer from './footer'
import {Link} from 'react-router-dom'
import ProjectData from "./projects.json";






function proj() {
  return (
    <div>
        <div className='background'   style={{background: `url('${process.env.PUBLIC_URL}/images/projback.png')`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}}></div>
        <div className="conteudo">
            <div className='projc'>
                <h1>Projetos</h1>
            </div>
            <div className='horizontal'>
                <img  src={`${process.env.PUBLIC_URL}/images/proji.png`} alt="tech"/>   
                <p>A Solve busca através dos seus projetos promover a sustentabilidade, o empreendedorismo e a inovação tecnológica, sempre a priorizar a qualidade. Podes conhecer alguns deles apenas com um clique! Conheça-nos!</p>
            </div>
            <div className="projwrap">
                <div className="projselect">
                    {ProjectData.map((postDetail,index)=>{

                        return <div key={postDetail.id}>
                            <Link to={`/projects/${postDetail.id}`}> 
                            <img  src={postDetail.cover}alt="tech"/>   
                            <div className="proj-info">
                                <p className="proj-name">{postDetail.title}</p>
                                <p className="proj-text">{postDetail.texto}</p>
                            </div>
                            </Link>
                        </div>
                    })}
                </div>
            </div>
            <div className="finalproj">
                <h2>Aqui estão alguns exemplos práticos do que nós da Solve já fizemos, agora o que podemos fazer por você?</h2>
                <div className='button'>
                    <Link to="/contacts" className="projbutton" >Contacte-nos!</Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}

export default proj;
