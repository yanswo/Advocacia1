import { useState } from "react";

const Contato = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    contato: "whatsapp",
  });

  const handleOpenModal = (canal) => {
    setFormData({ ...formData, contato: canal });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contato === "whatsapp") {
      const whatsappUrl = `https://wa.me/123456789?text=Nome:%20${formData.nome}%0AEmail:%20${formData.email}%0AMensagem:%20${formData.mensagem}`;
      window.open(whatsappUrl, "_blank");
    } else if (formData.contato === "email") {
      const mailtoLink = `mailto:contato@advocaciacristovao.com.br?subject=Contato%20via%20Formulário&body=Nome:%20${formData.nome}%0AEmail:%20${formData.email}%0AMensagem:%20${formData.mensagem}`;
      window.location.href = mailtoLink;
    }

    setIsModalOpen(false);
  };

  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Entre em contato através do WhatsApp ou Email!</p>
      <div className="contato-links">
        <a href="#" onClick={() => handleOpenModal("whatsapp")}>
          WhatsApp
        </a>
        <a href="#" onClick={() => handleOpenModal("email")}>
          Email
        </a>
      </div>

      {isModalOpen && (
        <div className="modal fadeIn">
          <div className="modal-content">
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Envie sua mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="modal-form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="modal-form-group">
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="modal-radio-group">
                <label>Meio de Contato:</label>
                <div>
                  <input
                    type="radio"
                    id="whatsapp"
                    name="contato"
                    value="whatsapp"
                    checked={formData.contato === "whatsapp"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="whatsapp">WhatsApp</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="email"
                    name="contato"
                    value="email"
                    checked={formData.contato === "email"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contato;
