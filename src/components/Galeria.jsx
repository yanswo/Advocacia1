import imgEscrit01 from '../imgs/escritorio01.jpg';
import imgEscrit02 from '../imgs/escritorio01.jpg';
import imgEscrit03 from '../imgs/escritorio02.jpg';
import imgEscrit04 from '../imgs/escritorio04.jpg';
import imgEscrit05 from '../imgs/escritorio06.jpg';
import imgEscrit06 from '../imgs/escritorio04.jpg';

const GaleriaSection = () => {
  return (
    <section id="galeria">
      <h2>Fotos do Escritório</h2>
      <ul className="cardsConteiner">
        <li className="card">
          <img src={imgEscrit01} alt="imagem escritorio" />
        </li>
        <li className="card">
          <img src={imgEscrit03} alt="imagem escritorio" />
        </li>
        <li className="card">
          <img src={imgEscrit02} alt="imagem escritorio" />
        </li>
        <li className="card">
          <img src={imgEscrit04} alt="imagem escritorio" />
        </li>
        <li className="card">
          <img src={imgEscrit05} alt="imagem escritorio" />
        </li>
        <li className="card">
          <img src={imgEscrit06} alt="imagem escritorio" />
        </li>
      </ul>
    </section>
  );
};

export default GaleriaSection;
