const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-sobre">
          <h3>Cristovão Brito</h3>
          <p>
            Sou advogado especializado em direito civil, empresarial e
            tributário, oferecendo serviços jurídicos de alta qualidade para
            empresas e indivíduos.
          </p>
          <p>
            Com mais de 10 anos de experiência, busco sempre uma abordagem
            personalizada para atender às necessidades específicas de cada
            cliente, com compromisso, ética e eficiência.
          </p>
          <div className="icones">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://wa.me/55XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="footer-contato">
          <h4>Entre em contato!</h4>

          <p>
            <i className="fas fa-envelope"></i>
            contato@advocaciacristovao.com.br
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            Avenida São João, 432, Centro, Maceió - AL
          </p>
        </div>

        <div className="footer-servicos">
          <h4>Serviços</h4>
          <ul>
            <li>Consultoria jurídica empresarial</li>
            <li>Elaboração e análise de contratos</li>
            <li>Defesa em processos judiciais</li>
            <li>Assessoria tributária e planejamento fiscal</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Advocacia Cristovão. Todos os direitos reservados.</p>
        <p>Política de Privacidade | Termos de Uso</p>
      </div>
    </footer>
  );
};

export default Footer;
