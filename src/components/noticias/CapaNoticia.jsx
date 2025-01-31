/* eslint-disable react/prop-types */
import React from 'react'
import noticias from './noticias.json'

const dataAtual = () => {
  const dataAgora = new Date();
  const dia = String(dataAgora.getDate()).padStart(2, '0');
  const mes = String(dataAgora.getMonth() + 1).padStart(2, '0');
  const ano = dataAgora.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

const calculaDiferencaDatas = (dataInicio, dataAtual) => {
  const [dia1, mes1, ano1] = dataInicio.split('/').map(Number);
  const [dia2, mes2, ano2] = dataAtual.split('/').map(Number);
  const data1 = new Date(ano1, mes1 - 1, dia1);
  const data2 = new Date(ano2, mes2 - 1, dia2);
  const diferencaEmMLsegundos = Math.abs(data2 - data1);

  const milissegundosDia = 24 * 60 * 60 * 1000;
  const diferenca = Math.ceil(diferencaEmMLsegundos / milissegundosDia);

  if(diferenca <= 31) {
    return `${Math.floor(diferenca)} dias`
  } else if(diferenca >= 31 && diferenca < 365) {
    return `${Math.floor(diferenca / 31)} meses`
  } else {
    return `${Math.floor(diferenca / 365)} anos`
  }
}

const CapaNoticia = ({ img, data, titulo, setActiveModal, setNoticia, id, ...props }) => {
  const dataAtualBR = dataAtual();
  const diferencaDatas = calculaDiferencaDatas(data, dataAtualBR);

  function selecionarNoticia() {
    setActiveModal(true)
    const noticiaSelecionada = noticias.find((noticia) => {
      return noticia.id === id
    })
    setNoticia(noticiaSelecionada)
  }

  return (
    <div {...props}>
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <div>
        <h3 onClick={() => selecionarNoticia(id)}>{titulo}</h3>
        <span>Postado há {diferencaDatas}</span>
        <button onClick={() => selecionarNoticia(id)}>Ver mais</button>
      </div>
    </div>
  );
};

export default CapaNoticia;
