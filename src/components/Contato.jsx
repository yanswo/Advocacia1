import { useState } from "react";
import styles from "./Contato.module.css";

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
    <div className={styles.contatoContainer}>
      <section id="contato">
        <h2>Contato</h2>
        <p>Entre em contato para mais informações sobre nossos serviços.</p>
        <br></br>
        <button onClick={handleOpenModal}>Entre em contato</button>

        {isModalOpen && (
          <div className={`${styles.modalOverlay} fadeIn`}>
            <div className={styles.modalContent}>
              <span className={styles.modalClose} onClick={handleCloseModal}>
                &times;
              </span>
              <h3>Escolha o meio de contato</h3>
              <div className={styles.contactSelection}>
                <button
                  onClick={() => handleSelectContact("whatsapp")}
                  className={`${styles.contactOption} ${
                    formData.contato === "whatsapp" ? styles.selected : ""
                  }`}
                >
                  WhatsApp
                </button>
                <button
                  onClick={() => handleSelectContact("email")}
                  className={`${styles.contactOption} ${
                    formData.contato === "email" ? styles.selected : ""
                  }`}
                >
                  Email
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className={`${styles.formTransition} ${formData.contato}`}
              >
                <div className={styles.modalFormGroup}>
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
                    <div className={styles.modalFormGroup}>
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
                    <div className={styles.modalFormGroup}>
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
                    <div className={styles.modalFormGroup}>
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
                    <div className={styles.modalFormGroup}>
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
                    <div className={styles.modalFormGroup}>
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

                <div className={styles.modalFormGroup}>
                  <label htmlFor="comentario">Comentário:</label>
                  <textarea
                    id="comentario"
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contato;
