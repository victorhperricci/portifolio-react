import React, { useEffect } from "react";
import Titulo from "../../Titulo/Titulo";
import { ContainerContato } from "./style";
import Aos from "aos";

const Contato = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  async function envioDeFormulario(e) {
    e.preventDefault();
    const email = "chavaiadoscla@hotmail.com";
    fetch(`http://aula.lab/envioEmail?email=${email}`, {
      mode: "no-cors",
    });
  }

  return (
    <ContainerContato>
      <article>
        <div className="info">
          <Titulo texto="Contato" />
          <p className="p" data-aos="fade-down">
            Caso queira entrar em contato, preencha o formulário abaixo e me
            mande um e-mail!
          </p>
        </div>

        <div className="contact">
          <form data-aos="fade-down" onSubmit={envioDeFormulario}>
            <div className="contact__item">
              <input
                className="contact__item__input"
                type="text"
                id="name"
                placeholder="Nome"
                on
              />
            </div>

            <div className="contact__item">
              <input
                className="contact__item__input"
                type="text"
                id="email"
                placeholder="E-mail"
              />
            </div>

            <div className="contact__item subject">
              <input
                className="contact__item__input"
                type="text"
                id="subject"
                placeholder="Assunto"
              />
            </div>

            <div className="contact__item textarea">
              <textarea
                className="contact__item__input"
                type="text"
                id="description"
                placeholder="Descrição"
              />
            </div>

            <div className="contact__item textarea">
              <button className="contact__item__button">Enviar</button>
            </div>
          </form>
        </div>
      </article>

      <article className="gif__contact" data-aos="fade-left">
        <img src="./assets/contact_gif.gif" alt="Gif Contato" />
      </article>
    </ContainerContato>
  );
};

export default Contato;
