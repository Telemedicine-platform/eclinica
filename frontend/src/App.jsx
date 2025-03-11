import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/_NotFound";
import LoginECadastroPage from "./pages/LoginECadastro";
import Sobre from "./pages/Sobre";
import Redefinir_senha from "./pages/RedefinirSenha";
import Cadastro_Medico from "./pages/Cadastro_Medico";
import Dashboard from "./pages/Dashboard";
import Contato from "./pages/Contato";
import Teste from "./pages/teste";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Sobre" Component={Sobre} />
          <Route path="/cadastro-medico" Component={Cadastro_Medico} />
          <Route path="/contato" Component={Contato} />
          <Route path="/login" Component={LoginECadastroPage} />
          <Route path="/recuperarSenha" Component={Redefinir_senha} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" Component={NotFound} />
          <Route path="/teste" Component={Teste} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
