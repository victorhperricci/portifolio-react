import React, { useEffect, useRef } from "react";
import { ExperienceContainer } from "./style";
import Lottie from "react-lottie";
import Titulo from "../../Titulo/Titulo";
import { Link } from "react-router-dom";

const Experience = ({ setIsRotate, isRotate }) => {
  const experienceContainer = useRef();

  useEffect(() => {
    if (experienceContainer.current) {
      window.addEventListener("scroll", () => {
        const topPage = document.documentElement.scrollTop;
        const topExperience = experienceContainer.current.getBoundingClientRect()
          .top;

        topPage >= topExperience - 100 ? setIsRotate(true) : setIsRotate(false);
      });
    }
  }, []);

  return (
    <ExperienceContainer className="section" ref={experienceContainer}>
      <div className="container-experience">
        <Titulo texto="Experiência" />
        <div className="academica div">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="item_experience"
          >
            Acadêmica <i class="fas fa-share"></i>
          </p>

          <p className="p" data-aos-delay="200" data-aos="fade-down">
            Bom, venho estudando desde Janeiro de 2020 e de la para cá fiz
            diversos projetos, alguns foi por cursos e outros por conta própria,
            se quiser, veja meus todos os meus{" "}
            <Link to="/projetos">Projetos</Link>
          </p>

          <div
            className="tec-container"
            data-aos-delay="300"
            data-aos="fade-down"
          >
            <p>
              Nessa caminhada, já estudei e venho estudando as seguintes
              tecnologias:
            </p>
            <div className="tec-list">
              <p className="tec_item">
                React JS <i class="fab fa-react fa-2x"></i>
              </p>

              <p className="tec_item">
                Scss <i class="fab fa-sass fa-2x"></i>
              </p>

              <p className="tec_item">
                Node JS <i class="fab fa-node fa-2x"></i>
              </p>

              <p className="tec_item">
                JavaScript <i class="fab fa-js-square fa-2x"></i>
              </p>

              <p className="tec_item">
                HTML <i class="fab fa-html5 fa-2x"></i>
              </p>

              <p className="tec_item">
                CSS <i class="fab fa-css3-alt fa-2x"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="exp-profissional div">
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="item_experience"
          >
            Profissional <i class="fas fa-share"></i>
          </p>

          <div className="empregos" data-aos-delay="500" data-aos="fade-down">
            <div className="card_emprego">
              <h3>Front End Jr</h3>

              <p className="nome_empresa">NewPost Locker</p>

              <div className="tempo">
                <p>Atual</p>
                <p>2021</p>
              </div>

              <div className="texts">
                <p>
                  Responsável pela interface dos sistemas, a interatividade,
                  usabilidade e responsividade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
};

export default Experience;
