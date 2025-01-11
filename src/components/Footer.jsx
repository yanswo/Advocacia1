const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-sobre">
          <h3>Cristovão Brito</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            fugit eligendi,
          </p>
          <div className="icones">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-contato">
          <h4>Entre em contato!</h4>

          <p>
            <i className="fas fa-envelope"></i>
            emailteste@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Rua teste, 432, Teste
          </p>
        </div>

        <div className="footer-servicos">
          <h4>Serviços</h4>
          <ul>
            <li>Consultoria jurídica</li>
            <li>Elaboração de contratos</li>
            <li>Defesa em processos judiciais</li>
            <li>Assessoria em questões tributárias</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Advocacia Cristovão All rights reserved.</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
};

export default Footer;
