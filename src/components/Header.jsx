import styles from "./Header.module.css";
import logo from '../imgs/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
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
