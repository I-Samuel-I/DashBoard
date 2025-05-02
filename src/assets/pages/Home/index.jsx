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
        <h1>Bem-Vindo(a) ao meu DashBoard pessoal</h1>
        <S.EnterButton onClick={Join}> Entrar</S.EnterButton>
      </S.Home>
    </>
  );
}
