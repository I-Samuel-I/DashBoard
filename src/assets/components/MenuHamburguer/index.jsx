import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
export default function MenuHamburguer() {
  const Navigate = useNavigate();

  const handleNavigate = (path) => {
    Navigate(path);
  };
  const [open, setOpen] = useState(false);
  return (
    <S.MenuHamburguer onClick={() => setOpen(!open)} open={open}>
      <S.MenuWrapper open={open}>
        <div />
        <div />
        <div />
      </S.MenuWrapper>
      
        <S.NavWrapper open={open}>
          <nav>
            <h1>DashBoard</h1>
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
            <ul>
              <button onClick={() => handleNavigate("/settings")}>
                <li>Configurações</li>
              </button>
              <button onClick={() => handleNavigate("/")}>
                <li>Desconectar</li>
              </button>
            </ul>
          </nav>
        </S.NavWrapper>
    </S.MenuHamburguer>
  );
}
