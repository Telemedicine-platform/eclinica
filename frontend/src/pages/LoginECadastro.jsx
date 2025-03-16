import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import LoginECadastro from "../components/loginEcadastro_components/index";
import { redirectToDashboard } from "../services/authService";

export default function LoginECadastroPage() {
  return (
    <>
      <Header />
      <LoginECadastro onLoginSuccess={redirectToDashboard} />
      <Footer />
    </>
  );
}
