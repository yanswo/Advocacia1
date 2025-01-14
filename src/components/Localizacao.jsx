import styles from "./Localizacao.module.css";

const LocalizacaoSection = () => {
  return (
    <div className={styles.localizacaoContainer}>
      <section id="localizacao">
        <h2>Localização</h2>
        <p>Endereço: Rua Exemplo, 123, Cidade - Estado</p>

        <div className={styles.mapContainer}>
          <iframe
            title="Localização do Escritório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2339.5184474397743!2d-37.28659759936229!3d-9.544705914420014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x706028837e85741%3A0x4594d9a92dad75d3!2sF%C3%B3rum%20da%20Comarca%20de%20Olho%20d&#39;%C3%81gua%20das%20Flores%20-%20TJAL!5e0!3m2!1spt-BR!2sbr!4v1736879184483!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default LocalizacaoSection;
