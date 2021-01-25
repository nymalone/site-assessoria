import React from "react";
import { Image} from 'react-bootstrap';

import Navbar from "../../atoms/Navbar";

import Maos from './img.png';

import "./styles.css";

export default function Home() {
  return (
    <div className="main-home">
      <Navbar />
      <section className="opening">
        <div className="right-side">
          <div className="right-side-content">
            <p>Assessoria e acompanhamento de escrita de dissertações, teses e artigos científicos.</p>
          </div>
          <div className="right-side-content">
            <p>Revisão e formatação de teses, artigos científicos, dissertações.</p>
          </div>
          <div className="right-side-content">
            <p>Elaboração de artigos científicos, TCC e relatório de estágio.</p>
          </div>
          <div className="right-side-content">
            <p>Atividades complementares para alunos de cursos presenciais e EAD.</p>
          </div>
          <div className="right-side-content">
            <p>Paper/Síntese/Slides/Portfólios/Resenhas.</p>
          </div>
        </div>
        <div className="left-side">
          <Image src={Maos} fluid className="left-side-img"/>
        </div>
      </section>
    </div>
  );
}
