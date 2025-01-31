import React from 'react';
import style from './NoticiasConteiner.module.css';
import CapaNoticia from './CapaNoticia';
import NoticiaModal from './noticiaModal';
import noticias from './noticias.json';

const Noticias = () => {
  const [activeModal, setActiveModal] = React.useState(false);
  const [noticia, setNoticia] = React.useState('');

  return (
    <>
      <section className={style.noticiaConteiner}>
        <h1>Noticias atuais</h1>
        <div className={style.noticias}>
          {noticias.map(({ titulo, img, data, id }) => {
            return (
              <CapaNoticia
                key={id}
                titulo={titulo}
                img={img}
                data={data}
                id={id}
                className={style.capaNoticia}
                setActiveModal={setActiveModal}
                setNoticia={setNoticia}
              />
            );
          })}
        </div>
      </section>
      {activeModal && (
        <NoticiaModal setActiveModal={setActiveModal} noticia={noticia} />
      )}
    </>
  );
};

export default Noticias;
