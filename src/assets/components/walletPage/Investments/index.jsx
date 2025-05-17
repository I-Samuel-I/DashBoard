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
        <h1>{t("walletPage.balanceSection.balanceAssets","Meus Ativos")}</h1>
        <table>
          <thead>
            <tr>
              <th>{t("walletPage.balanceSection.balanceTableHeaders-01","Conta")}</th>
              <th>{t("walletPage.balanceSection.balanceTableHeaders-02","Valores")}</th>
              <th>{t("walletPage.balanceSection.balanceTableHeaders-03","Proporção")}</th>
              <th>{t("walletPage.balanceSection.balanceTableHeaders-04","Ações")}</th>
            </tr>
          </thead>
          <tbody>
              {JS.active.map((item, index) => (
                  <tr key={index}>
                  <td>{t(`walletPage.balanceSection.balanceAccounts.${item.conta}`, item.conta)}</td>
                  <td>{item.valor}</td>
                  <td>{item.porcentagem}</td>
                  <td>{item.ativo}</td>
                <div>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <S.MoreOptions>
                    <ul>
                      <li>{t("walletPage.balanceSection.balanceActions-01","Depósito")}</li>
                      <li>{t("walletPage.balanceSection.balanceActions-02","Saque")}</li>
                      <li>{t("walletPage.balanceSection.balanceActions-03","Transferência")}</li>
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
