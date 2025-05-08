import img from "../../img/perfil.png"
import { useNavigate } from "react-router-dom";
import * as S from "./style";
export default function Home() {
  const Navigate = useNavigate();
  const Join = () => {
    Navigate("/dashboard");
  };
  return (
    <>
      <S.Home>
        <S.DashGif>
          <img src={img} alt="Dashboard" />
        </S.DashGif>
        <S.WelcomeInfo>
          <h1>BEM-VINDO(A)</h1>
          <h2> AO SEU DASHBOARD PESSOAL</h2>

          <p>
            Aqui você acompanha suas finanças, metas e tudo que importa em um só
            lugar,acesse agora!
          </p>
          <S.EnterButton onClick={Join}> Mostre-me</S.EnterButton>
        </S.WelcomeInfo>
      </S.Home>
    </>
  );
}
