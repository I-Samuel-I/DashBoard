import * as S from "./style";
export default function Balance() {
  return (
    <>
      <S.Balance>
        <S.Info>
          <h2>Saldo Disponível</h2>
          <h1>R$ 125,24</h1>
        </S.Info>
        <nav>
          <ul>
            <li>Depositar</li>
            <li>Saque</li>
            <li>Transferir</li>
          </ul>
        </nav>
      </S.Balance>
    </>
  );
}
