import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navbar() {
  const Navigate = useNavigate();

  const handleNavigate = (path) => {
    Navigate(path);
  };

  return (
    <>
      <S.NavBar>
        <nav>
          <h1>DashLy</h1>
          <ul>
            <button onClick={() => handleNavigate("/dashboard")}>
              
              <li>DashBoard</li>
            </button>
            <button onClick={() => handleNavigate("/wallet")}>
              <li>Carteira</li>
            </button>
            <button onClick={() => handleNavigate("/transactions")}>
              <li>Transações</li>
            </button>
            <button onClick={() => handleNavigate("/support")}>
              <li>Suporte</li>
            </button>
          </ul>
          <S.OptionsWrapped>
            <ul>
              <button onClick={() => handleNavigate("/settings")}>
                <li>Configurações</li>
              </button>
              <button onClick={() => handleNavigate("/")}>
                <li>Desconectar</li>
              </button>
            </ul>
          </S.OptionsWrapped>
        </nav>
      </S.NavBar>
    </>
  );
}
