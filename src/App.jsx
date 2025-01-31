import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sobre from './components/Sobre';
import Artigos from './components/Artigos';
import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Cards from './components/Cards';
import NoticiasConteiner from './components/noticias/NoticiasConteiner'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Sobre />
      <Cards />
      <Artigos />
      <NoticiasConteiner />
      <Galeria />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;
