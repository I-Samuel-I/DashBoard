import * as S from "./style";
import Historic from "../Historic";
import Finance from "../finance";
import { useTranslation } from "react-i18next";

export default function Graphic() {
  const { t } = useTranslation();

  const data = [
    { month: t("graphSection.graphicMonths-01", "Fev"), height: "50px" },
    { month: t("graphSection.graphicMonths-02", "Mar"), height: "75px" },
    { month: t("graphSection.graphicMonths-03", "Abr"), height: "105px" },
    { month: t("graphSection.graphicMonths-04", "Mai"), height: "85px" },
    { month: t("graphSection.graphicMonths-05", "Jun"), height: "130px" },
    { month: t("graphSection.graphicMonths-06", "Jul"), height: "165px" },
    { month: t("graphSection.graphicMonths-07", "Ago"), height: "75px" },
    { month: t("graphSection.graphicMonths-08", "Set"), height: "115px" },
    {
      month: t("graphSection.graphicMonths-09", "Out"),
      color: "#9E6EFE",
      height: "145px",
    },
  ];

  return (
    <>
      <S.Graphic>
        <S.ResultWrapped>
          <h1>{t("graphSection.graphicTitle", "Gráfico de Receitas")}</h1>
          <ul>
            <li>2000</li>
            <li>1000</li>
            <li>500</li>
            <li>250</li>
            <li>0</li>
          </ul>
          <S.ColumnWrapped>
            <ul style={{ display: "flex" }}>
              {data.map((item) => (
                <li key={item.month}>
                  <div
                    style={{
                      backgroundColor: item.color ? item.color : "#e8dcff",
                      height: item.height,
                      borderRadius: "5px",
                    }}
                  />
                  <p>{item.month}</p>
                </li>
              ))}
            </ul>
          </S.ColumnWrapped>
        </S.ResultWrapped>

        <S.HistoricTransation>
          <div>
            <h1>
              {t(
                "transactionHistorySection.historyTitle",
                "Histórico de Transações"
              )}
            </h1>
            <ul>
              <li>
                {t("transactionHistorySection.historiyDays-01", "Ontem")}
                <ul>
                  <li>
                    {t(
                      "transactionHistorySection.historyValues-01",
                      "R$ -540,52"
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {t("transactionHistorySection.historiyDays-02", "Quinta-Feira")}
                <ul>
                  <li>
                    {t(
                      "transactionHistorySection.historyValues-02",
                      "R$ -273,90"
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {t(
                  "transactionHistorySection.historiyDays-03",
                  "Segunda-Feira"
                )}
                <ul>
                  <li>
                    {t(
                      "transactionHistorySection.historyValues-03",
                      "R$ -1.456,20"
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </S.HistoricTransation>
      </S.Graphic>
      <Finance />
      <Historic />
    </>
  );
}
