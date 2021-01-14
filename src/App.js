import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import { homeObjOne } from "./components/InfoSection/data";
import Services from "./components/Services";
import Testimonials from "./components/Testiomnials";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Layout>
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Services />
        <Testimonials />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
