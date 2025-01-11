const LocalizacaoSection = () => {
  return (
    <section id="localizacao" className="minimalista">
      <h2>Localização</h2>
      <p>Endereço: Rua Exemplo, 123, Cidade - Estado</p>

      {/* Mapa Integrado - Google Maps */}
      <div className="map-container">
        <iframe
          title="Localização do Escritório"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.315865293431!2d-35.7175215125494!3d-9.654028862440184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145a3242d3263%3A0xa6595dadf066018a!2sRua%20Hamilton%20de%20Barros%20Soutinho%2C%201899-1775%20-%20Jati%C3%BAca%2C%20Macei%C3%B3%20-%20AL%2C%2057035-690!5e0!3m2!1spt-BR!2sbr!4v1736633725278!5m2!1spt-BR!2sbr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default LocalizacaoSection;
