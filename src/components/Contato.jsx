import { useState } from "react";

const Contato = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    numero: "",
    causa: "",
    comentario: "",
    assunto: "",
    mensagemAdicional: "",
    contato: "whatsapp",
  });

  const handleOpenModal = () => {
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
      if (!formData.numero) {
        alert("Por favor, forneça seu número para contatar via WhatsApp.");
        return;
      }

      const whatsappUrl = `https://wa.me/123456789?text=Nome:%20${formData.nome}%0A%0ANúmero:%20${formData.numero}%0ACausa:%20${formData.causa}%0AComentário:%20${formData.comentario}`;
      window.open(whatsappUrl, "_blank");
    } else if (formData.contato === "email") {
      if (!formData.email) {
        alert("Por favor, forneça seu email para contatar via Email.");
        return;
      }

      const mailtoLink = `mailto:contato@advocaciacristovao.com.br?subject=${formData.assunto}&body=Nome:%20${formData.nome}%0AEmail:%20${formData.email}%0ACausa:%20${formData.causa}%0AComentário:%20${formData.comentario}%0AMensagem%20Adicional:%20${formData.mensagemAdicional}`;
      window.location.href = mailtoLink;
    }

    setIsModalOpen(false);
  };

  const handleSelectContact = (canal) => {
    setFormData({ ...formData, contato: canal });
  };

  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Entre em contato para mais informações sobre nossos serviços.</p>
      <br></br>
      <button onClick={handleOpenModal} className="contact-button">
        Entre em contato
      </button>

      {isModalOpen && (
        <div className="modal-overlay fadeIn">
          <div className="modal-content">
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>Escolha o meio de contato</h3>
            <div className="contact-selection">
              <button
                onClick={() => handleSelectContact("whatsapp")}
                className={`contact-option ${
                  formData.contato === "whatsapp" ? "selected" : ""
                }`}
              >
                WhatsApp
              </button>
              <button
                onClick={() => handleSelectContact("email")}
                className={`contact-option ${
                  formData.contato === "email" ? "selected" : ""
                }`}
              >
                Email
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`form-transition ${formData.contato}`}
            >
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

              {formData.contato === "whatsapp" && (
                <>
                  <div className="modal-form-group">
                    <label htmlFor="numero">Número:</label>
                    <input
                      type="tel"
                      id="numero"
                      name="numero"
                      value={formData.numero}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="causa">Causa:</label>
                    <input
                      type="text"
                      id="causa"
                      name="causa"
                      value={formData.causa}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </>
              )}

              {formData.contato === "email" && (
                <>
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
                    <label htmlFor="assunto">Assunto:</label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="mensagemAdicional">
                      Mensagem Adicional:
                    </label>
                    <textarea
                      id="mensagemAdicional"
                      name="mensagemAdicional"
                      value={formData.mensagemAdicional}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </>
              )}

              <div className="modal-form-group">
                <label htmlFor="comentario">Comentário:</label>
                <textarea
                  id="comentario"
                  name="comentario"
                  value={formData.comentario}
                  onChange={handleInputChange}
                  required
                ></textarea>
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
