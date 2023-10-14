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
					<a href="https://www.facebook.com/solve.pt/">
						<img id='social' src={`${process.env.PUBLIC_URL}/images/F.svg`} alt="social"/>
					</a>
					<p>Solve - Soluções em Engenharia</p>
					<a href="https://www.instagram.com/solve.pt/">
						<img id='social' src={`${process.env.PUBLIC_URL}/images/I.svg`} alt="social"/>
					</a>
					<p>solve.pt</p>
					<a href="https://www.linkedin.com/company/solve-j%C3%BAnior-iniciativa-de-engenharia/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B3bj8DnRnSeuOsa75q%2F3HZw%3D%3D">
						<img id='social' src={`${process.env.PUBLIC_URL}/images/IN.svg`} alt="social"/>
					</a>
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
                <div className='nr'>
                <p>+351 915 434 756</p>
                <p>+351 916 914 480</p>
                </div>
            </div>
        </div>
      </div>
    
  );
}

export default footer;