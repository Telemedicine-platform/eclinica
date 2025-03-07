import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/_NotFound";
import LoginECadastroPage from "./pages/LoginECadastro";
import Sobre from "./pages/Sobre";
import Redefinir_senha from "./pages/RedefinirSenha";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Sobre" Component={Sobre} />
          <Route path="/login" Component={LoginECadastroPage} />
          <Route path="/recuperarSenha" Component={Redefinir_senha} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
