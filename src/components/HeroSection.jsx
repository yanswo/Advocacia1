import styles from "./HeroSection.module.css";
import fotoPerfil from "../imgs/fotoPerfil.jpeg";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.conteudo}>
        <h1>Seu parceiro no caminho para a justiça.</h1>
        <p>
          Estou ao seu lado, fornecendo orientação jurídica especializada e
          apoio inabalável para proteger seus direitos e garantir que a justiça
          seja feita.
        </p>
        <a href="#">Agende uma consulta</a>
      </div>
      <div className={styles.fotoPerfil}>
        <img src={fotoPerfil} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
