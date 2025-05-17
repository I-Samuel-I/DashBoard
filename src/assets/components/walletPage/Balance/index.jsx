import * as S from "./style";
import { useTranslation } from "react-i18next";
export default function Balance() {
  const { t } = useTranslation();
  return (
    <>
      <S.Balance>
        <S.Info>
          <h2>{t("walletPage.balanceSection.balanceTitle","Saldo Disponível")}</h2>
          <h1>{t("walletPage.balanceSection.balanceAmount","R$ 125,24")}</h1>
        </S.Info>
        <nav>
          <ul>
            <li>{t("walletPage.balanceSection.balanceActions-01","Depositar")}</li>
            <li>{t("walletPage.balanceSection.balanceActions-02","Saque")}</li>
            <li>{t("walletPage.balanceSection.balanceActions-03","Transferir")}</li>
          </ul>
        </nav>
      </S.Balance>
    </>
  );
}
