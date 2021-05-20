import React, { useEffect } from "react";
import Titulo from "../../Titulo/Titulo";
import { ContainerContato } from "./style";
import Aos from "aos";

const Contato = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  function handleAfterElement() {
    const fields = document.querySelectorAll(".contact__item__input");
    fields.forEach((f) => {
      if (f === document.activeElement) {
        f.parentNode.classList.add("onfocus");
      } else {
        f.parentNode.classList.remove("onfocus");
      }
    });
  }

  return (
    <ContainerContato>
      <article className="info">
        <Titulo texto="Contato" />
        <p className="p" data-aos="fade-down">
          Caso queira entrar em contato, preencha o formulário abaixo e me mande
          um e-mail!
        </p>
      </article>

      <article className="contact">
        <form>
          <div className="contact__item">
            <input
              className="contact__item__input"
              type="text"
              id="name"
              placeholder="Nome"
              onFocus={handleAfterElement}
              on
            />
          </div>

          <div className="contact__item">
            <input
              className="contact__item__input"
              type="text"
              id="email"
              placeholder="E-mail"
              onFocus={handleAfterElement}
            />
          </div>

          <div className="contact__item subject">
            <input
              className="contact__item__input"
              type="text"
              id="subject"
              placeholder="Assunto"
              onFocus={handleAfterElement}
            />
          </div>

          <div className="contact__item textarea">
            <textarea
              className="contact__item__input"
              type="text"
              id="description"
              placeholder="Descrição"
              onFocus={handleAfterElement}
            />
          </div>
        </form>
      </article>
    </ContainerContato>
  );
};

export default Contato;
