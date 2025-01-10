import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SobreSection from "./components/SobreSection";
import ArtigosSection from "./components/ArtigosSection";
import GaleriaSection from "./components/GaleriaSection";
import LocalizacaoSection from "./components/LocalizacaoSection";
import ContatoSection from "./components/ContatoSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SobreSection />
      <ArtigosSection />
      <GaleriaSection />
      <LocalizacaoSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default App;
