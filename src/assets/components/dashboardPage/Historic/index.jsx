import * as S from "./style";
import { useTranslation } from "react-i18next";

export default function Historic() {
  const { t } = useTranslation();

  return (
    <>
      <S.BuyerHistory>
        <h1>{t("buyersSection.buyersTitle", "Histórico de Compradores")}</h1>
        <S.TableContainer>
          <S.WrappedTabble>
            <thead>
              <tr>
                <th>ID</th>
                <th>{t("buyersSection.buyersDate", "Data")}</th>
                <th>{t("buyersSection.buyersName", "Nome")}</th>
                <th>{t("buyersSection.buyersLocation", "Localização")}</th>
                <th>{t("buyersSection.buyersAmount", "Valor")}</th>
                <th>{t("buyersSection.buyersStatus", "Situação")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#12345</td>
                <td>{t("buyersSection.table.MM/DD/YYYY-01", "02/08/2023")}</td>
                <td>Roberto Santos</td>
                <td>Rio Grande do Sul</td>
                <td>R$ 15,00</td>
                <td>
                  <S.StatusCircle color="#0bb07b" /> {t("buyersSection.table.tableStatus-01", "Aprovado")}
                </td>
              </tr>
              <tr>
                <td>#67890</td>
                <td>{t("buyersSection.table.MM/DD/YYYY-02", "03/08/2023")}</td>
                <td>Beatriz Rodrigues</td>
                <td>Salvador</td>
                <td>R$ 15,00</td>
                <td>
                  <S.StatusCircle color="orange" /> {t("buyersSection.table.tableStatus-02", "Em Análise")}
                </td>
              </tr>
            </tbody>
          </S.WrappedTabble>
        </S.TableContainer>
      </S.BuyerHistory>
    </>
  );
}
