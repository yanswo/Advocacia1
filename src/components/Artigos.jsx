import styles from "./Artigos.module.css";

const artigos = [
  {
    titulo: "Ciências criminais e constituição",
    descricao: "Estudos em homenagem ao professor José Fernando Lima Souza",
    data: "Outubro de 2023",
    link: "https://esmal.tjal.jus.br/_pdf/1-Livro-ciencias-criminais-e-constituicao_.pdf", // link do PDF
  },
  {
    titulo: "REGIME PRÓPRIO DE PREVIDÊNCIA SOCIAL",
    descricao:
      "O artigo trata da relevância das parcerias no Regime Próprio de Previdência Social para assegurar os direitos dos segurados, respeitando o equilíbrio financeiro e atuarial. Explora as mudanças trazidas pela Emenda Constitucional nº 103/2019 e destaca o uso de convênios e contratos administrativos como ferramentas para aprimorar a gestão previdenciária e promover os direitos fundamentais.",
    data: "Fevereiro de 2024",
    link: "https://rbds.ieprev.com.br/rbds/article/view/288/242", // exemplo de link PDF
  },
  {
    titulo: "Direito Penal e Sociedade",
    descricao:
      "O livro Direito Penal e Sociedade reúne artigos acadêmicos que discutem a relação entre o direito penal e questões sociais, como encarceramento massivo, violência de gênero, racismo, feminicídio e justiça restaurativa, oferecendo análises críticas sobre o sistema de justiça criminal no Brasil e alternativas ao modelo punitivista atual.",
    data: "Dezembro de 2021",
    link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", // exemplo de link PDF
  },
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
