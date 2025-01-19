import styles from './Header.module.css';
import logo from '../imgs/logo.png';
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { PiArticleMedium } from "react-icons/pi";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <nav className={styles.navegacao}>
        <a href="#sobre">Sobre</a>
        <a href="#artigos">Artigos</a>
        <a href="#galeria">Galeria</a>
        <a href="#localizacao">Localização</a>
        <a href="#contato">Contato</a>
      </nav>
      <nav className={styles.mobileBar}>
        <a href="#sobre"><BsFillPersonBadgeFill /></a>
        <a href="#artigos"><PiArticleMedium /></a>
        <a href="#galeria"><GrGallery /></a>
        <a href="#contato"><MdContactPhone /></a>
        <a href="#localizacao"><FaMapLocationDot /></a>
      </nav>
    </header>
  );
};

export default Header;
