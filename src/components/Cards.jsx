import imagemCards from "../imgs/fotoCards.jpeg";
import { ImHammer2 } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <section className={styles.cardsConteiner}>
      <div className={styles.informacoes}>
        <img src={imagemCards} alt="Imagem de exemplo de serviço" />
        <div className={styles.conteudoCard}>
          <h2>O que ofereco?</h2>
          <p>
            Ofereço consultoria jurídica, defesa penal, assessoria
            constitucional e processual, além de orientação jurídica
            personalizada. Trabalho com ética e compromisso para garantir
            soluções eficientes.
          </p>
          <a href="#">Veja mais</a>
        </div>
      </div>
      <ul className={styles.cards}>
        <li>
          <h3>
            <ImHammer2 /> Consultoria Jurídica Penal
          </h3>
          <p>Especialização em Direito Penal e Processual Penal.</p>
          <p>Orientação jurídica em questões penais.</p>
        </li>
        <li>
          <h3>
            <FaHandshake /> Defesa em Processos Penais
          </h3>
          <p>Representação legal em tribunais penais.</p>
          <p>Defesa em processos criminais.</p>
        </li>
        <li>
          <h3>
            <IoPerson /> Assessoria Constitucional e Processual
          </h3>
          <p>Consultoria em Direito Constitucional.</p>
          <p>Assistência em questões processuais.</p>
        </li>
        <li>
          <h3>
            <MdAccountBalance /> Aconselhamento Jurídico
          </h3>
          <p>Orientação personalizada para clientes.</p>
          <p>Atendimento com ética e compromisso.</p>
        </li>
      </ul>
    </section>
  );
};

export default Cards;
