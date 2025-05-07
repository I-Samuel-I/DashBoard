import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Finance() {
  const { t } = useTranslation();

  return (
    <S.Finance>
      <section>
        <div>
          <h1>{t("financeSection.financeTitle-01", "Total de Vendas")}</h1>
          <p>{t("financeSection.financeValues-01", "R$ 3.265,21")}</p>
          <S.Icons positive>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <p>+</p>
            <p>11%</p>
          </S.Icons>
        </div>
        <div>
          <h1>{t("financeSection.financeTitle-02", "Total líquido")}</h1>
          <p>{t("financeSection.financeValues-02", "R$ 2.825,58")}</p>
          <S.Icons positive>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <p>+</p>
            <p>15%</p>
          </S.Icons>
        </div>
        <div>
          <h1>{t("financeSection.financeTitle-03", "Compras canceladas")}</h1>
          <p>{t("financeSection.financeValues-03", "R$ 130,00")}</p>
          <S.Icons negative>
            <FontAwesomeIcon icon={faArrowTrendDown} />
            <p>-80%</p>
          </S.Icons>
        </div>
        <div>
          <h1>{t("financeSection.financeTitle-04", "Reembolsos")}</h1>
          <p>{t("financeSection.financeValues-04", "R$ 345,00")}</p>
          <S.Icons negative>
            <FontAwesomeIcon icon={faArrowTrendDown} />
            <p>-78%</p>
          </S.Icons>
        </div>
      </section>
    </S.Finance>
  );
}
