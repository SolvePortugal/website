import React from 'react';
import './info.css';
import Footer from './footer'
import {Link} from 'react-router-dom'




function info() {
  return (
    <div>
        <div className='background'   style={{background: `url('${process.env.PUBLIC_URL}/images/people.png')`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
        <div className='content'>
            <div className='info'>
                <h1>Quem Somos</h1>
                <h2>História, Missão e Visão</h2>
                <div className='texto'>
                    <p>Em 25 de novembro de 2019, nos berços dos departamentos da FCTUC, foi fundada a Solve - Soluções em Engenharia. Inicialmente idealizada por 11 estudantes de engenheira civil e química, a Solve visa ser uma empresa de serviços de consultoria sustentável especializada. Além disso, seu intuito maior é de ajudar a atingir os objetivos do desenvolvimento sustentável da agenda 2030 da ONU, utilizando de todas competências e aprendizados da FCTUC, a fim de alcançar uma realidade mais sustentável. <br></br><br></br>Hoje a Solve conta com membros de diversas áreas do conhecimento da FCTUC. Todos preparados e treinados para realizar diversas tarefas desde as departamentais até mesmo as de elaboração e execução de projetos, visando sempre atender as necessidades de nossos clientes da melhor forma possível tendo em mente uma visão sustentável.<br></br><br></br>Nossa visão é possuir um padrão de excelência elevado nos nossos serviços de consultoria em engenharia de forma sustentável e criativa.</p>
                </div>
            </div>
            <div className='valores'>
                <h1>Valores</h1>
                <img  src={`${process.env.PUBLIC_URL}/images/valores.png`} alt="valores"/>   
            </div>
        </div>
        <div className="members">
            <div className="membt">
                <h1>Membros</h1>
                <p>Todos os integrantes da Solve são alunos da Faculdade de Ciências e Tecnologia da Universidades de Coimbra, dos mais variados cursos, como Engenharia Química, Engenharia Civil, Engenharia Eletrotécnica e de Computadores, Engenharia do Ambiente, Design e Multimédia, Física e Arquitetura. A Solve é auxiliada por um Conselho Científico de profissionais e professores da conceituada FCTUC.</p>
            </div>
            <img  src={`${process.env.PUBLIC_URL}/images/members.png`} alt="members"/>   
        </div>
        <div className="services">
            <h1>Serviços</h1>
            <div className="servicoss">
                <div className="servicos1">
                    <div className="service">
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos1.png`} alt="servicos"/>
                        <p>Estudo e análise da melhoria de um processo de modo a torná-lo mais sustentável</p>
                    </div>
                    <div className="service">
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos2.png`} alt="servicos"/>
                        <p>Estudo do impacto ambiental de um processo/produto</p>
                    </div>
                    <div className="service">
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos3.png`} alt="servicos"/>
                        <p>Estudo e análise da sustentabilidade em modelos de negócios</p>
                    </div>
                    <div className="service">
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos4.png`} alt="servicos"/>
                        <p>Elaboração de manuais de sustentabilidade e economia circular</p>
                    </div>
                </div>
                <div className="servicos2">
                    <div className="service">
                        <p>Gestão de resíduos (tratamento e análise de dados)</p>
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos5.png`} alt="servicos"/>
                    </div>
                    <div className="service">
                        <p>Plano de redução, reutilização e descarte de resíduos</p>
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos6.png`} alt="servicos"/>
                    </div>
                    <div className="service">
                        <p>Plano de melhoria da eficiência energética</p>
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos7.png`} alt="servicos"/>
                    </div>
                    <div className="service">
                        <p>Plano de gestão de água e efluentes</p>           
                        <img  src={`${process.env.PUBLIC_URL}/images/servicos8.png`} alt="servicos"/>
                    </div>
                </div>
            </div>
            <div className='button'>
                <Link to="/contacts" className="orcamento" >Faça o seu orçamento!</Link>
            </div>
        </div>
        <div className="qualidade">
            <h1>Qualidade</h1>
            <img id="qdesktop" src={`${process.env.PUBLIC_URL}/images/qualidade.png`} alt="qualidade"/>
            <img id="qmobile" src={`${process.env.PUBLIC_URL}/images/qulidademobile.png`} alt="qualidade"/>
        </div>
        <div className="cor">
            <div className="cortex">
                <h1>Córtex</h1>
                <p>Num contexto de engenharia revolucionária e de um mercado de trabalho competitivo, surge a Solve, respaldada por um Conselho Científico, com o objetivo de trazer a componente prática, industrial e preparatória para os alunos da FCTUC. </p>
                <img  src={`${process.env.PUBLIC_URL}/images/cortex.png`} alt="cortex"/>
            </div>
            <div className="objetivos">
                <h1>Objetivos</h1>
                <p><span className="dot"></span> Trabalho em equipa <br></br><span className="dot"></span> Multidisciplinaridade<br></br><span className="dot"></span> Learn by Doing<br></br><span className="dot"></span> Adaptabilidade<br></br><span className="dot"></span> Espírito Crítico<br></br><span className="dot"></span> Desenvolvimento Sustentável<br></br><span className="dot"></span> Dinamismo com o tecido empresarial<br></br><span className="dot"></span> Extensão do conhecimento</p>
                <img  src={`${process.env.PUBLIC_URL}/images/engine.png`} alt="engine"/>
            </div>
        </div>
        <div className="selective">
            <h1>Processo Selectivo</h1>
            <p>Gostaste de nós? Queres entrar para a equipa?</p>
            <div className='button buttonsel'>
                <a href="https://linktr.ee/solveportugal" className="orcamento" >Seja um Solviano!</a>
            </div>
            <div className="sImg">
                <img id="side" src={`${process.env.PUBLIC_URL}/images/simg1.png`} alt="selective"/>
                <img id="midle" src={`${process.env.PUBLIC_URL}/images/simg2.png`} alt="selective"/>
                <img  id="side" src={`${process.env.PUBLIC_URL}/images/simg3.png`} alt="selective"/>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}

export default info;
