import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import NavbarApp from "./components/NavbarApp";
import Accueil from "./pages/accueil/Accueil";
import Connexion from "./pages/connexion/Connexion";
import DetailsLivre from "./pages/DetailsLivre";
import GestionEmprunts from "./pages/GestionEmprunts";
import GestionLivres from "./pages/GestionLivres";
import ListeLivres from "./pages/ListesLivres";
import MesEmprunts from "./pages/MesEmprunts";

function App() {
  return (
    <BrowserRouter>
    <NavbarApp />
    <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/liste-livres" element={<ListeLivres/>} />
        <Route path="/livres" element={<GestionLivres/>} />
        <Route path="/emprunts" element={<GestionEmprunts/>} />
        <Route path="/mes-emprunts" element={<MesEmprunts/>} />
        <Route path="/details-livre/:idlivre" element={<DetailsLivre/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
