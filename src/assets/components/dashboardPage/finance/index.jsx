import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
export default function Finance() {
  return (
    <>
      <S.Finance>
        <section>
          <div>
            <h1>Total de Vendas</h1>
            <p>R$ 3.265,21</p>
            <S.Icons positive>
              <FontAwesomeIcon icon={faArrowTrendUp}/>
              <p>+</p>
              <p>11%</p>
            </S.Icons>
          </div>
          <div>
            <h1>Total líquido</h1>
            <p>R$ 2.825,58</p>
            <S.Icons positive>
              <FontAwesomeIcon icon={faArrowTrendUp} />
              <p>+</p>
              <p> 15%</p>
            </S.Icons>
          </div>
          <div>
            <h1>Compras canceladas</h1>
            <p>R$ 130,00</p>
            <S.Icons negative>
              <FontAwesomeIcon icon={faArrowTrendDown} />
              <p> -80%</p>
            </S.Icons>
          </div>
          <div>
            <h1>Reembolsos</h1>
            <p>R$ 345,00</p>
            <S.Icons negative>
              <FontAwesomeIcon icon={faArrowTrendDown} />
              <p> -78%</p>
            </S.Icons>
          </div>
        </section>
      </S.Finance>
    </>
  );
}
