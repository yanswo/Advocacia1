/* eslint-disable react/prop-types */
import React from 'react';
import style from './NoticiaModal.module.css';

function fecharModal(target, currentTarget, setActiveModal) {
  if (target === currentTarget) setActiveModal(false);
}

const NoticiaModal = ({ setActiveModal, noticia }) => {
  return (
    <section
      className={style.modalConteiner}
      onClick={({ target, currentTarget }) =>
        fecharModal(target, currentTarget, setActiveModal)
      }
    >
      <div className={style.modalContent}>
        <div className={style.content}>
          <button className={style.buttonClose} onClick={() => setActiveModal(false)}>Fechar</button>
          <div className={style.bannerNoticia}>
            <div style={{ backgroundImage: `url(${noticia.img})` }}></div>
            <h1>{noticia.titulo}</h1>
          </div>
          <div className={style.contentNoticia}>
            {noticia.noticias.map(({id, texto, img}) => {
              return (
                <div key={id} className={style.divNoticia}>
                  <div style={{ backgroundImage: `url(${img})` }}></div>
                  <p>{texto}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiaModal;
