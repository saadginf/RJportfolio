import Layout from "./layout/Layout";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <Router>
      <Layout>
        <HeroSection />
        saad
      </Layout>
    </Router>
  );
}

export default App;
