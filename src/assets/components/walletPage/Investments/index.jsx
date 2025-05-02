import * as S from "./style.jsx";
import * as JS from "./script.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
export default function Investments() {
  return (
    <>
      <S.Investments>
        <h1>Meus Ativos</h1>
        <table>
          <thead>
            <tr>
              <th>Conta</th>
              <th>Valores</th>
              <th>Proporção</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {JS.active.map((item, index) => (
              <tr key={index}>
                <td>{item.conta}</td>
                <td>{item.valor}</td>
                <td>{item.porcentagem}</td>
                <td>{item.ativo}</td>
                <div>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <S.MoreOptions>
                    <ul>
                      <li>Depósito</li>
                      <li>Saque</li>
                      <li>Transferência</li>
                    </ul>
                  </S.MoreOptions>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </S.Investments>
    </>
  );
}
