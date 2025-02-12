import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import Historic from "../Historic";
export default function Graphic() {
  return (
    <>
      <S.Graphic>
        <section>
          <div>
            <h1>Gráfico de Receitas</h1>
            <nav>
              <S.WrappedMonth>
                <ul>
                  <li> 2000</li>
                  <li> 1000</li>
                  <li> 500</li>
                  <li> 250</li>
                  <li>0</li>
                </ul>
                <ul>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Fev</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Mar</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Abr</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Mai</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Jun</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Jul</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Ago</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Set</li>
                  </S.WrappedGraphColumn>
                  <S.WrappedGraphColumn>
                    <div />
                    <li>Out</li>
                  </S.WrappedGraphColumn>
                </ul>
              </S.WrappedMonth>
            </nav>
          </div>
          <div>
            <S.WrappedTransaction>
              <h1>Histórico de Transações</h1>
              <div>
                <p>Ontem</p>
                <p>R$ -273,90</p>
              </div>
              <div>
                <p>Quinta-Feira</p>
                <p>R$ -273,90</p>
              </div>
              <div>
                <p>Segunda-Feira</p>
                <p>R$ -1.456,20</p>
              </div>
            </S.WrappedTransaction>
          </div>
        </section>
      </S.Graphic>
      <S.WrappedFinance>
        <section>
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
        </section>
      </S.WrappedFinance>
      <Historic />
    </>
  );
}
