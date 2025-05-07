import * as S from "./style.jsx";
import * as JS from "./script.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

export default function Investments() {
  const { t } = useTranslation();
  return (
    <>
      <S.Investments>
        <h1>{t("","Meus Ativos")}</h1>
        <table>
          <thead>
            <tr>
              <th>{t("","Conta")}</th>
              <th>{t("","Valores")}</th>
              <th>{t("","Proporção")}</th>
              <th>{t("","Ações")}</th>
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
                      <li>{t("","Depósito")}</li>
                      <li>{t("","Saque")}</li>
                      <li>{t("","Transferência")}</li>
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
