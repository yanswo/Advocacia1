import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Sobre from "./components/Sobre";
import Artigos from "./components/Artigos";
import Galeria from "./components/Galeria";
import Localizacao from "./components/Localizacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Sobre />
      <Artigos />
      <Galeria />
      <Localizacao />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;
