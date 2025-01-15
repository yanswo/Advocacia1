import { useState } from "react";
import styles from "./Sobre.module.css";

const SobreSection = () => {
  const [mostrarMais, setMostrarMais] = useState(false);

  const textoInicial = `
    Cristóvão Brito é mestre em Direito pela Universidade Federal de Alagoas (UFAL),
    e professor da Faculdade FASVIPA. Possui graduação em Direito pelo Centro de Ensino Superior
    Arcanjo Mikael de Arapiraca e é especialista em Direito Penal e Processual Penal pela Universidade
    Estácio de Sá. 
  `;

  const textoCompleto = `
    ${textoInicial} Foi coordenador do curso de Direito da Faculdade São Vicente de Pão de Açúcar (FASVIPA)
    no período de 2023-2024 e ex-presidente da ACRIMAL - Associação da Advocacia Criminal de Alagoas,
    Subseção Sertão. Ex-membro do Tribunal de Ética e Disciplina da OAB Alagoas, delegado da ESA - Escola
    Superior de Advocacia - Subseção Santana do Ipanema/AL (triênio 2022-2024) e vice-presidente da OAB
    Alagoas - Subseção Santana do Ipanema. Professor visitante da UNIMA - Centro Universitário de Maceió
    em 2022 e 2024, procurador do Instituto de Previdência de São José da Tapera desde 2019, e professor
    de Direito Penal e Processual Penal. Cristóvão também atua como advogado.
  `;

  return (
    <section id="sobre" className={styles.sobre}>
      <h2 className={styles.titulo}>Sobre o Mestre Cristóvão Brito</h2>
      <p className={styles.texto}>
        {mostrarMais ? textoCompleto : textoInicial}
      </p>
      <button
        className={styles.botaoMostrar}
        onClick={() => setMostrarMais(!mostrarMais)}
      >
        {mostrarMais ? "Mostrar menos" : "Mostrar mais"}
      </button>
    </section>
  );
};

export default SobreSection;
