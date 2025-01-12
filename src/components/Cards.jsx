import imagemCards from '../imgs/imagemCards.png';
import { ImHammer2 } from "react-icons/im";
import { FaHandshake } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { VscSymbolProperty } from "react-icons/vsc";
import { FaBalanceScale } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";


const Cards = () => {
  return (
    <section className="cardsConteiter">
      <div className="informacoes">
          <img src={imagemCards} alt="Imagem de exemplo de serviço" />
          <div className="conteudoCard">
              <h2>O que ofereco?</h2>
              <p>Forneço soluções jurídicas personalizadas para atender às suas necessidades exclusivas, garantindo que seus direitos sejam protegidos e que a justiça seja feita.</p>
              <a href="#">Veja mais</a>
          </div>
      </div>
      <ul className="cards">
        <li>
          <h3><ImHammer2 /> Contencioso e Resolução de Disputas</h3>
          <p>Representação legal em tribunal.</p>
          <p>Contencioso civil, criminal e comercial.</p>
          <p>Mediation and arbitration services.</p>
        </li>
        <li>
          <h3><FaHandshake /> Direito Societário e Empresarial</h3>
          <p>Elaboração e revisão de contratos.</p>
          <p>Compliance e governança corporativa.</p>
          <p>Fusões, aquisições e reestruturações de negócios.</p>
        </li>
        <li>
          <h3><MdFamilyRestroom /> Direito da família</h3>
          <p>Divórcio e guarda dos filhos.</p>
          <p>Acordos pré-nupciais.</p>
          <p>Questões de planejamento imobiliário e herança.</p>
        </li>
        <li>
          <h3><IoPerson /> Direito do Trabalho e do Trabalhador</h3>
          <p>Disputas no local de trabalho e rescisão injusta.</p>
          <p>Contratos e políticas de trabalho.</p>
          <p>Negociações sindicais.</p>
        </li>
        <li>
          <h3><GoHomeFill /> Direito da Propriedade Intelectual</h3>
          <p>Registro de marca registrada e direitos autorais.</p>
          <p>Casos de violação de PI.</p>
          <p>Contratos de licenciamento e patentes.</p>
        </li>
        <li>
          <h3><VscSymbolProperty /> Direito Imobiliário e Imobiliário</h3>
          <p>Transações e contratos imobiliários.</p>
          <p>Disputas de terras e questões de zoneamento.</p>
          <p>Contratos de arrendamento e direitos do inquilino.</p>
        </li>
        <li>
          <h3><FaBalanceScale /> Direitos Humanos e Advocacia</h3>
          <p>Assistência jurídica para comunidades marginalizadas.</p>
          <p>Protecção dos direitos fundamentais.</p>
          <p>Representação em litígios de interesse público.</p>
        </li>
        <li>
          <h3><MdAccountBalance /> Direito Tributário e Financeiro</h3>
          <p>Regulamentos financeiros e auditorias.</p>
          <p>Conformidade fiscal e disputas.</p>
          <p>Planejamento tributário para pessoas físicas e jurídicas.</p>
        </li>
      </ul>
    </section>
  )
}

export default Cards
