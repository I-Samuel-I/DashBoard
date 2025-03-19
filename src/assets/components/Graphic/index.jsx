import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import Historic from "../Historic";
export default function Graphic() {
  return (
    <>
      <S.Graphic>
        <div>
          <h1>Gráfico de Receitas</h1>
          <ul>
            <li>2000</li>
            <li>1000</li>
            <li>500</li>
            <li>250</li>
            <li>0</li>
          </ul>
          <S.ColumnWrapped>
            <ul>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
              <li>
                <div />
                <p>a</p>
              </li>
            </ul>
          </S.ColumnWrapped>
        </div>
        <div>
          <S.WrappedHistoric>
            <h1>Histórico de Transações</h1>
            <ul>
              <li>
                Ontem
                <p>R$ -540,52</p>
              </li>
              <li>
                Quinta-Feira
                <p>R$ -273,90</p>
              </li>
              <li>
                Segunda-Feira
                <p>R$ -1.456,20</p>
              </li>
            </ul>
          </S.WrappedHistoric>
        </div>
      </S.Graphic>

      <S.WrappedFinance>
        <section>
          <S.WrappedResponsiveFinance>
            <div>
              <h1>Total de Vendas</h1>
              <p>R$ 3.265,21</p>

              <S.WrappedIconGreen>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <p>+</p>
                <p>11%</p>
              </S.WrappedIconGreen>
            </div>
            <div>
              <h1>Total líquido</h1>
              <p>R$ 2.825,58</p>
              <S.WrappedIconGreen>
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <p>+</p>
                <p> 15%</p>
              </S.WrappedIconGreen>
            </div>
          </S.WrappedResponsiveFinance>
          <S.WrappedResponsiveFinance>
            <div>
              <h1>Compras canceladas</h1>

              <p>R$ 130,00</p>
              <S.WrappedIconRed>
                <FontAwesomeIcon icon={faArrowTrendDown} />
                <p> -80%</p>
              </S.WrappedIconRed>
            </div>
            <div>
              <h1>Reembolsos</h1>
              <p>R$ 345,00</p>
              <S.WrappedIconRed>
                <FontAwesomeIcon icon={faArrowTrendDown} />
                <p> -78%</p>
              </S.WrappedIconRed>
            </div>
          </S.WrappedResponsiveFinance>
        </section>
      </S.WrappedFinance>
      <Historic />
    </>
  );
}
