import Graphic from "../../components/dashboardPage/Graphic";
import NavbarDisplayOff from "../../components/nav/NavbarDisplayOff";
import Perfil from "../../img/perfil.png";
import ReturnPage from "../../routes/Return/returnPage";
import * as S from "./style";

export default function Dashboard() {
  return (
    <S.MainContainer>
      <S.DashBoard>
        <header>
          <S.TittleContainer>
            <h1>Olá, seja bem-vindo(a) </h1>
            <h2>Esse é o seu DashBoard pessoal.</h2>
          </S.TittleContainer>
          <figure>
            <img src={Perfil} alt="Perfil" />
            <p>Samuel Gomes</p>
          </figure>
        </header>
        <section>
          <Graphic />
        </section>
      </S.DashBoard>
      <NavbarDisplayOff />
      <ReturnPage />
    </S.MainContainer>
  );
}
