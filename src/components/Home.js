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
                    <p>Somos uma júnior iniciativa com sede em Coimbra, Portugal, com foco na realização de serviços de consultoria sustentável especializada. A Solve - Soluções em Engenharia foi idealizada por alunos de Engenharia Química e Engenharia Civil,  e contamos hoje com uma equipa multidisciplinar de 24 alunos de diversas áreas do conhecimento da FCTUC.</p>
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
                    <p>A Solve é a primeira e única Júnior Iniciativa em Portugal com foco na sustentabilidade. Dispomos do auxílio de professores altamente qualificados da FCTUC na execução de nossos projetos e serviços. Nosso projeto E-Waste at the University of Coimbra (EWUC) fez uma coleta de mais de meia tonelada de lixo eletro-eletrônico.<br></br><br></br>Por quê a Solve?<br></br>Somos resultado, somos sustentabilidade, somos a solução.</p>
                    </div>
                    <h2>We SOLVE Your Problem!</h2>
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
                <h1>Depoimentos</h1>
                <div className='dep-wrapper'>
                    <div className='depoimento'>
                        <img  src={`${process.env.PUBLIC_URL}/images/depoi1.png`} alt="depoimento1"/> 
                        <p>“A Solve é uma das melhores ferramentas que já foram criadas dentro da Universidade de Coimbra para atingir os objetivos do desenvolvimento sustentável, reunindo a força estudantil para a construção de um novo comportamento sustentável das próximas gerações.”<br></br><br></br>Denner Nunes,<br></br>Alumni</p> 
                    </div>
                    <div className='depoimento'>
                        <img  src={`${process.env.PUBLIC_URL}/images/depoi2.png`} alt="depoimento1"/> 
                        <p>“Foi um enorme prazer ter participado no Engenious organizado pela Solve Portugal, o qual mostrou ter um conjunto de elementos bastante competentes e munidos de um interesse e vontade fora de série. A Solve Portugal mostra já uma competência fenômenal na procura incessante de soluções inovadoras para o mundo empresarial. Um parceiro em ter em conta!”<br></br><br></br>João Bento, <br></br>Manager do Departamento de Melhoria Contínua <br></br>Ansell</p>
                    </div>
                    <div className='depoimento'>
                        <img  src={`${process.env.PUBLIC_URL}/images/depoi3.png`} alt="depoimento1"/> 
                        <p>“O projeto EWUC foi de grande valor para a Solve e o ambiente acadêmico no qual se encontra. Além de aumentar a conscientização sobre as questões dos resíduos de equipamentos elétricos e eletrônicos (REEEs) e coletar mais de meia tonelada de resíduos, possibilitou o desenvolvimento de conhecimento na Solve e a criação do Grupo de Economia Circular.”<br></br><br></br>José Heitor Soares,<br></br>Alumni</p>
                    </div>
                </div>
            </div>
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
                </div>
            </div>
            <Footer/>
        </div>
      </div>
    
  );
}

export default Home;