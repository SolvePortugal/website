import React from 'react';
import '../App.css';
import './Home.css';
import {Link} from 'react-router-dom'
import Footer from './footer'



function Home() {
  return (
      <div>
        <div className='mainlogo'>
            <img id='logoimg' src={`${process.env.PUBLIC_URL}/images/mainLogo.png`} alt="Logo"/>   
        </div>
        <div className='whoarewe'>
            <div className='wrapper'>
                <div className='text'>
                    <h1>Quem Somos?</h1>
                    <p>Somos uma júnior iniciativa com sede em Coimbra, Portugal, com foco na realização de serviços de consultoria sustentável especializada. A Solve - Soluções em Engenharia foi idealizada por alunos de Engenharia Química e Engenharia Civil,  e contamos hoje com uma equipa multidisciplinar de 21 alunos de diversas áreas do conhecimento da FCTUC.</p>
                    <div className='button'>
                        <Link to="/info" className="quemsomos">Conheça-nos melhor!</Link>
                    </div>
                    <div className='button'>
                        <Link to="/contacts" className="orcamento" >Faça o seu orçamento!</Link>
                    </div>
                </div>
                <div className='retangulo'>
                    <img id='foto' src={`${process.env.PUBLIC_URL}/images/foto.png`} alt="foto"/>   
                </div>
            </div>
            <div className='projetos'>
                    <img id='tech' src={`${process.env.PUBLIC_URL}/images/techup.png`} alt="projetos"/>   
                    <img id='eng' src={`${process.env.PUBLIC_URL}/images/engenious.png`} alt="projetos" />   
                    <img id='uc' src={`${process.env.PUBLIC_URL}/images/uc.png`} alt="projetos"/>   
            </div>
            <div className='diferenciais'>
                <div className='dif-wrapper'>
                    <h1>Diferenciais</h1>
                    <div className="img-text">
                    <img  src={`${process.env.PUBLIC_URL}/images/brain.png`} alt="brain"/>   
                    <p>A Solve é a <span className="bold-text">primeira</span> e <span className="bold-text">única</span> Júnior Iniciativa em Portugal com foco na sustentabilidade. Dispomos do auxílio de professores altamente qualificados da <span className="bold-text">FCTUC</span> na execução de nossos projetos e serviços. Nosso projeto E-Waste at the University of Coimbra (EWUC) fez uma coleta de mais de <span className="bold-text">meia tonelada</span> de lixo eletro-eletrônico.<br></br><br></br><span className="bold-text">Por quê a Solve?</span><br></br>Somos resultado, somos sustentabilidade, somos a solução.</p>
                    </div>
                    <h2>We <span className="bold-text">SOLVE</span> Your Problem!</h2>
                </div>
            </div>
            <div className='servicos'>
                <h1>Serviços</h1>
                <div className='services-grid'>
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos1.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos2.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos3.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos4.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos5.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos6.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos7.png`} alt="servicos"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/servicos8.png`} alt="servicos"/>   
                </div>
                <p>A Solve - Soluções em Engenharia preza por uma mentalidade sustentável em todos os seus projetos e serviços. Tendo isso em mente, pretendemos atuar em todo o ciclo da Economia Circular, desde a otimização de produtos e processos até a recolha e tratamento de resíduos. Também oferecemos outros serviços de logística e gestão sustentável de processos e produtos.</p>
            </div>
            <div className='depoimentos'>
            <iframe src="https://www.youtube.com/embed/oOLSdo8OpX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <div className='parcerias'>
                <h1>Parcerias</h1>
                <div className='grid1'>
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria1.png`} alt="parceria"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria2.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria3.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria4.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria5.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria6.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria7.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria8.png`} alt="parceria"/>  
                </div>
                <div className='grid2'>
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria9.png`} alt="parceria"/>   
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria10.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria11.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria12.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria13.png`} alt="parceria"/>  
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria14.png`} alt="parceria"/>
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria15.png`} alt="parceria"/> 
                    <img  src={`${process.env.PUBLIC_URL}/images/parceria16.svg`} alt="parceria"/>   
                </div>
            </div>
            <Footer/>
        </div>
      </div>
    
  );
}

export default Home;