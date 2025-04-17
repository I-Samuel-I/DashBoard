import * as S from "./style";
import { useNavigate } from "react-router-dom";
import {
  faTableColumns,
  faWallet,
  faCartShopping,
  faUsersGear,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const Navigate = useNavigate();

  const handleNavigate = (path) => {
    Navigate(path);
  };

  return (
    <>
      <S.NavBar>
        <nav>
          <h1>DashBoard</h1>
          <ul>
            <button onClick={() => handleNavigate("/dashboard")}>
              <li>
                <S.Icon icon={faTableColumns} />
                DashBoard
              </li>
            </button>
            <button onClick={() => handleNavigate("/wallet")}>
              <li>
                <S.Icon icon={faWallet} />
                Carteira
              </li>
            </button>
            <button onClick={() => handleNavigate("/transactions")}>
              <li>
                <S.Icon icon={faCartShopping} />
                Transações
              </li>
            </button>
            <button onClick={() => handleNavigate("/support")}>
              <li>
                <S.Icon icon={faUsersGear} />
                Suporte
              </li>
            </button>
          </ul>
          <S.OptionsWrapped>
            <ul>
              <button onClick={() => handleNavigate("/settings")}>
                <li>
                  <S.Icon icon={faGear} />
                  Configurações
                </li>
              </button>
              <button onClick={() => handleNavigate("/")}>
                <li>
                  <S.Icon icon={faPowerOff} />
                  Desconectar
                </li>
              </button>
            </ul>
          </S.OptionsWrapped>
        </nav>
      </S.NavBar>
    </>
  );
}
