import Graphic from "../../components/Graphic";
import NavbarDisplayOff from "../../components/NavbarDisplayOff";
import Perfil from "../../img/perfil.png";
import * as S from "./style";
export default function Dashboard() {
  return (
    <>
      <S.ContentWrapped>
        <S.DashBoard>
          <header>
            <S.WrappedTittle>
              <h1>Olá, seja bem-vindo(a)! </h1>
              <h3>Esse é o seu DashBoard pessoal.</h3>
            </S.WrappedTittle>
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
      </S.ContentWrapped>
    </>
  );
}
