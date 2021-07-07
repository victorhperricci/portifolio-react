import React, { useEffect, useState } from "react";
import Titulo from "../../Titulo/Titulo";
import { ContainerContato } from "./style";
import Aos from "aos";

const Contato = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const [messageEmail, setMessageEmail] = useState("");

  useEffect(() => {
    Aos.init();
  }, []);

  async function envioDeFormulario(e) {
    e.preventDefault();
    if (
      ![""].includes(
        inputName && inputEmail && inputSubject && inputDescription
      )
    ) {
      setMessageEmail("E-mail enviado com sucesso!");

      setInputName("");
      setInputEmail("");
      setInputSubject("");
      setInputDescription("");

      setTimeout(() => {
        setMessageEmail("");
      }, 2000);
    } else {
      setMessageEmail("Preencha todos os campos!");
    }

    // const email = "chavaiadoscla@hotmail.com";
    // const emailRequest = await (
    //   await fetch(
    //     `http://localhost:8080/aulasPHP-B7WEB/envioEmail/?email=${email}`,
    //     {
    //       mode: "no-cors",
    //     }
    //   )
    // ).json();
    // console.log(emailRequest);
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
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>

            <div className="contact__item">
              <input
                className="contact__item__input"
                type="text"
                id="email"
                placeholder="E-mail"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>

            <div className="contact__item subject">
              <input
                className="contact__item__input"
                type="text"
                id="subject"
                placeholder="Assunto"
                value={inputSubject}
                onChange={(e) => setInputSubject(e.target.value)}
              />
            </div>

            <div className="contact__item textarea">
              <textarea
                className="contact__item__input"
                type="text"
                id="description"
                placeholder="Descrição"
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
              />
            </div>

            <div className="contact__item button">
              <button className="contact__item__button">Enviar</button>
            </div>

            {messageEmail !== "" && (
              <p className="message_email">{messageEmail}</p>
            )}
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
