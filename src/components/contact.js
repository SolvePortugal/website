import React from "react";
import "../App.css";
import "./contact.css";
import Footer from "./footer";

function contact() {
  const key = process.env.REACT_APP_MAPS_KEY;

  return (
    <div>
      <div
        className="background"
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/contactb.png')`,
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
            <img
              src={`${process.env.PUBLIC_URL}/images/social2.png`}
              alt="social"
            />
          </div>
        </div>
        <div className="form">
          <h2>Entre em contato conosco:</h2>
          <form>
            <p>Nome:</p>
            <input type="text" name="name" /> <br></br>
            <p>E-mail:</p>
            <input type="text" name="mail" />
            <br></br>
            <p>Telefone:</p>
            <input type="text" name="phone" />
            <br></br>
            <p>Mensagem:</p>
            <input type="text" name="message" />
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
          width="600"
          height="450"
          loading="lazy"
          allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJbdGsShT5Ig0RuaZCe0dkRWM&key=${key}`}
        ></iframe>
      </div>
      <div className="end"></div>
      <Footer />
    </div>
  );
}

export default contact;
