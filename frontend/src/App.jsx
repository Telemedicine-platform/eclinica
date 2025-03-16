import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/_NotFound";
import LoginECadastroPage from "./pages/LoginECadastro";
import Sobre from "./pages/Sobre";
import Redefinir_senha from "./pages/RedefinirSenha";
import Cadastro_Medico from "./pages/Cadastro_Medico";
import Dashboard from "./pages/Dashboard";
import Dashboard_Paciente from "./pages/Dashboard_Paciente";
import { isAuthenticated } from "./services/authService";
import Header from "./components/header/header";
import Header_login from "./components/header/header_login";

function App() {
  const isAuth = isAuthenticated();

  return (
    <>
      <Router>
        {isAuth ? <Header_login /> : <Header />}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/Sobre" Component={Sobre} />
          <Route path="/cadastro-medico" Component={isAuth ? NotFound : Cadastro_Medico} />
          <Route path="/login" Component={isAuth ? NotFound : LoginECadastroPage} />
          <Route path="/recuperarSenha" Component={Redefinir_senha} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-paciente" element={<Dashboard_Paciente />} />
          <Route path="*" Component={NotFound} />        
        </Routes>
      </Router>
    </>
  );
}

export default App;
