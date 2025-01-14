import { useEffect, useRef, useState } from "react";
import imgEscrit01 from "../imgs/escritorio01.jpg";
import imgEscrit02 from "../imgs/escritorio01.jpg";
import imgEscrit03 from "../imgs/escritorio02.jpg";
import imgEscrit04 from "../imgs/escritorio04.jpg";
import imgEscrit05 from "../imgs/escritorio06.jpg";
import imgEscrit06 from "../imgs/escritorio04.jpg";
import styles from "./Galeria.module.css";

const GaleriaSection = () => {
  const [inView, setInView] = useState(false);
  const galeriaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (galeriaRef.current) {
      observer.observe(galeriaRef.current);
    }

    return () => {
      if (galeriaRef.current) {
        observer.unobserve(galeriaRef.current);
      }
    };
  }, []);

  return (
    <section id="galeria" ref={galeriaRef}>
      <h2>Fotos do Escritório</h2>
      <ul
        className={`${styles.galeriaConteiner} ${
          inView ? styles.aparecer : styles.sair
        }`}
      >
        <li className={styles.galeriaCard}>
          <img src={imgEscrit01} alt="imagem escritorio" />
        </li>
        <li className={styles.galeriaCard}>
          <img src={imgEscrit03} alt="imagem escritorio" />
        </li>
        <li className={styles.galeriaCard}>
          <img src={imgEscrit02} alt="imagem escritorio" />
        </li>
        <li className={styles.galeriaCard}>
          <img src={imgEscrit04} alt="imagem escritorio" />
        </li>
        <li className={styles.galeriaCard}>
          <img src={imgEscrit05} alt="imagem escritorio" />
        </li>
        <li className={styles.galeriaCard}>
          <img src={imgEscrit06} alt="imagem escritorio" />
        </li>
      </ul>
    </section>
  );
};

export default GaleriaSection;
