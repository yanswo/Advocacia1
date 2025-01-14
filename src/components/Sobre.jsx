import { useState } from "react";
import download from "../imgs/download.jpeg";
import styles from "./Sobre.module.css";

const SobreSection = () => {
  const [mostrarMais, setMostrarMais] = useState(false);

  const textoInicial = `Cristóvão Brito é um renomado mestre em Direito, formado pela
    Universidade Federal de Alagoas (UFAL), com uma carreira acadêmica
    notável e dedicada ao ensino jurídico. Professor da Faculdade FASVIPA, 
    ele é conhecido por sua abordagem inovadora e prática nas aulas,
    buscando sempre conectar a teoria com a realidade do sistema jurídico
    brasileiro.`;

  const textoCompleto = `${textoInicial}
    Como coordenador da Faculdade São Bento, Cristóvão Brito tem
    desempenhado um papel fundamental na modernização e gestão do curso de
    Direito, promovendo a integração entre a instituição e o mercado
    jurídico. Sua visão estratégica tem contribuído para o fortalecimento da
    formação dos alunos, além de incentivar a pesquisa e a extensão, com
    projetos que visam a inclusão social e o aprimoramento do sistema
    jurídico. Com uma trajetória marcada por sua paixão pela educação,
    Cristóvão também se dedica ao estudo das áreas do Direito Constitucional
    e Processual, sendo um defensor da constante atualização e formação
    contínua dos profissionais da área jurídica. Sua atuação como mentor de
    alunos e colegas de profissão tem sido referência para aqueles que
    buscam excelência no campo do Direito. Além disso, Cristóvão é conhecido
    por seu estilo de liderança colaborativa, incentivando debates e
    discussões construtivas dentro e fora da sala de aula. Ele acredita no
    poder do conhecimento para transformar a sociedade, e essa filosofia
    orienta sua prática pedagógica e administrativa.`;

  return (
    <div className={styles.Sobre}>
      <section id="sobre">
        <h2>Sobre o Mestre Cristóvão Brito</h2>
        <div className={styles.sobreContainer}>
          <img
            src={download}
            alt="Cristóvão Brito"
            className={styles.sobreImagem}
          />
          <p>{mostrarMais ? textoCompleto : textoInicial}</p>
        </div>
        <div className={styles.botaoContainer}>
          <button
            className={styles.botaoMostrar}
            onClick={() => setMostrarMais(!mostrarMais)}
          >
            {mostrarMais ? "Mostrar menos" : "Mostrar mais"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SobreSection;
