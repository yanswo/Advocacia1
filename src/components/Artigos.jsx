import styles from "./Artigos.module.css";

const artigos = [
  {
    titulo: "Ciências criminais e constituição",
    descricao: "Estudos em homenagem ao professor José Fernando Lima Souza",
    data: "2023, ESMAL",
    link: "https://esmal.tjal.jus.br/_pdf/1-Livro-ciencias-criminais-e-constituicao_.pdf", // link do PDF
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
  // outros artigos
];

const ArtigosSection = () => {
  const openPdf = (pdfUrl) => {
    window.open(pdfUrl, "_blank"); // Abre o link do PDF em uma nova aba
  };

  return (
    <section id="artigos" className={styles.artigosSection}>
      <h2>Artigos e Participações</h2>
      <div className={styles.artigosContainer}>
        {artigos.map((artigo, index) => (
          <div
            key={index}
            className={styles.artigoCard}
            onClick={() => openPdf(artigo.link)} // Ao clicar, abre o PDF
          >
            <h3>{artigo.titulo}</h3>
            <p className={styles.artigoDescricao}>{artigo.descricao}</p>
            <span className={styles.artigoData}>{artigo.data}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtigosSection;
