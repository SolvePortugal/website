import React from 'react';
import '../App.css';
import './footer.css';



function footer() {
  return (
      <div className='footer'>
        <img id='logof' src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="Logo"/>   
        <h3>Redes Sociais</h3>
        <div className='contactos'>
            <div className='contactos-social'>
            <img id='social' src={`${process.env.PUBLIC_URL}/images/F.svg`} alt="social"/>
            <p>Solve - Soluções em Engenharia</p>
            <img id='social' src={`${process.env.PUBLIC_URL}/images/I.svg`} alt="social"/>
            <p>solve.pt</p>
            <img id='social' src={`${process.env.PUBLIC_URL}/images/IN.svg`} alt="social"/>
            <p>Solve - Engineering Consulting</p>
            </div>
        </div>
        <h3>Contactos</h3>
        <div className='contactos adress'>
            <img id='location' src={`${process.env.PUBLIC_URL}/images/location.png`} alt="location"/>
            <p>Departamento de Engenharia Química da Universidade de Coimbra, Rua Sílvio Lima, Polo II - 3030-790, Coimbra - Portugal</p> 
        </div>
        <div className='contactos final'>
            <div className='lado'>
                <img id='mail' src={`${process.env.PUBLIC_URL}/images/mail.png`} alt="location"/>
                <p>geral@solveportugal.com</p>
            </div>
            <div className='lado'>
                <img id='phone' src={`${process.env.PUBLIC_URL}/images/phone.png`} alt="location"/>
                <p>+351 963 901 599</p>
            </div>
        </div>
      </div>
    
  );
}

export default footer;