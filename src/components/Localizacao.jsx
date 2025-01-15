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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3934.589357406898!2d-37.285364!3d-9.544359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzInMzkuNyJTIDM3wrAxNycwNy4zIlc!5e0!3m2!1spt-BR!2sbr!4v1736974185725!5m2!1spt-BR!2sbr"
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
