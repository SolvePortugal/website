import React, { useRef } from 'react';
import "../App.css";
import "./contact.css";
import Footer from "./footer";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const key = process.env.REACT_APP_MAPS_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_nqrk0gt', form.current, 'user_0TcaJrATTOu8IIKOO27Zq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
      <div
        className="background-contact"
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/contactb.png')`,backgroundRepeat: 'no-repeat', backgroundPosition: 'center' ,backgroundSize: 'cover'
        }}
      ></div>
      <div className="content">
        <div className="contact">
          <h1>Contactos</h1>
          <div className="next">
            <img
              src={`${process.env.PUBLIC_URL}/images/phone.png`}
              alt="phone"
            />
            <p>+351 963 901 599</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/mail.png`}
              alt="mail"
            />
            <p>geral@solveportugal.com</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/location.png`}
              alt="wlocation"
            />
            <p>
              Departamento de Engenharia Química
              Universidade de Coimbra
            </p>
            <p></p>
            <p>
              Rua Sílvio Lima, Polo II 3030-790 Coimbra -
              Portugal
            </p>
          </div>
          <div className="redes">
            <h2>Redes Sociais:</h2>
            <div className='redes-icons'>
              <img id='social' src={`${process.env.PUBLIC_URL}/images/F.svg`} alt="social"/>
              <img id='social' src={`${process.env.PUBLIC_URL}/images/I.svg`} alt="social"/>
              <img id='social' src={`${process.env.PUBLIC_URL}/images/IN.svg`} alt="social"/>
            </div>
          </div>
        </div>
        <div className="form">
          <h2>Entre em contato conosco:</h2>
          <form ref={form} onSubmit={sendEmail}>
            <p>Nome:</p>
            <input type="text" name="name" required/> <br></br>
            <p>E-mail:</p>
            <input type="text" name="mail" required/>
            <br></br>
            <p>Telefone:</p>
            <input type="text" name="phone" />
            <br></br>
            <p>Mensagem:</p>
            <input type="text" name="message" required/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input
              id="send"
              type="submit"
              value="Enviar!"
            />
          </form>
        </div>
      </div>
      <div className="mapa">
        <iframe
          title="Mapa"
          width="80%"
          height="60%"
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbdGsShT5Ig0RuaZCe0dkRWM&key=${key}`}
        ></iframe>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
