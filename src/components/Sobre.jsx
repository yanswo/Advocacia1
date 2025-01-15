import { useState } from "react";
import styles from "./Sobre.module.css";

const SobreSection = () => {
  const [mostrarMais, setMostrarMais] = useState(false);

  const textoInicial = `
    Cristóvão Brito é um mestre em Direito, formado pela Universidade Federal de Alagoas (UFAL),
    e professor da Faculdade FASVIPA. Sua abordagem inovadora no ensino jurídico conecta a teoria
    com a prática do sistema jurídico brasileiro.
  `;

  const textoCompleto = `
    ${textoInicial} Como coordenador da Faculdade São Bento, Cristóvão Brito modernizou o curso de Direito,
    promovendo a integração entre a instituição e o mercado jurídico. Ele incentiva a pesquisa e a extensão
    com projetos voltados para a inclusão social. Especialista em Direito Constitucional e Processual, Cristóvão
    é um defensor da constante atualização dos profissionais do Direito. Seu estilo de liderança colaborativa
    promove debates construtivos, refletindo sua crença no poder transformador do conhecimento.
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
