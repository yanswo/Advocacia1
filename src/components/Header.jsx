import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Cristóvão Brito</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#artigos">Artigos</a>
        <a href="#galeria">Galeria</a>
        <a href="#localizacao">Localização</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
