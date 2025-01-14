import styles from "./Artigos.module.css";

const artigos = [
  {
    titulo: "Impactos da Reforma Tributária no Brasil",
    descricao:
      "Publicado na Revista Jurídica X, este artigo analisa os efeitos da reforma tributária nas empresas brasileiras.",
    data: "Janeiro de 2024",
  },
  {
    titulo: "A Evolução do Direito Digital no Brasil",
    descricao:
      "Artigo publicado no Jornal Y, discutindo as mudanças legais e as implicações da tecnologia no direito.",
    data: "Dezembro de 2023",
  },
  {
    titulo: "Participação no Congresso de Direito Constitucional",
    descricao:
      "Cristóvão Brito compartilhou suas pesquisas sobre a Constituição Brasileira no Congresso Nacional de Direito.",
    data: "Novembro de 2023",
  },
  {
    titulo: "Entrevista sobre Direito e Sociedade",
    descricao:
      "Entrevista realizada no Canal Z, discutindo a importância do direito na sociedade moderna.",
    data: "Outubro de 2023",
  },
  {
    titulo: "Entrevista sobre Direito e Sociedade",
    descricao:
      "Entrevista realizada no Canal Z, discutindo a importância do direito na sociedade moderna.",
    data: "Outubro de 2023",
  },
  {
    titulo: "Entrevista sobre Direito e Sociedade",
    descricao:
      "Entrevista realizada no Canal Z, discutindo a importância do direito na sociedade moderna.",
    data: "Outubro de 2023",
  },
];

const ArtigosSection = () => {
  return (
    <section id="artigos" className={styles.artigosSection}>
      <h2>Artigos e Participações</h2>
      <div className={styles.artigosContainer}>
        {artigos.map((artigo, index) => (
          <div key={index} className={styles.artigoCard}>
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
