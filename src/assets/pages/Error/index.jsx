import { useNavigate } from "react-router-dom";
import * as S from "./style";
export default function Error() {
  const Navigate = useNavigate();

  const handleNavigate = (path) => {
    Navigate(path);
  }
    return (
    <>
      <main>
        <S.SectionContainer>
          <h1>404</h1>
          <div>
            <h2>
              Desculpe! A página que você está procurando não foi encontrada.
            </h2>
            <a onClick={()=> handleNavigate("/")}>Ir para a Página Inicial</a>
          </div>
        </S.SectionContainer>
      </main>
    </>
  );
}
