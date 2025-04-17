import * as S from "./style";

import Historic from "../Historic";
import Finance from "../finance";

export default function Graphic() {
  const data = [
    { month: "Fev",},
    { month: "Mar" },
    { month: "Abr" },
    { month: "Mai" },
    { month: "Jun" },
    { month: "Jul" },
    { month: "Ago" },
    { month: "Set" },
    { month: "Out", color: "#9E6EFE" },
  ];
  return (
    <>
      <S.Graphic>
        <div>
          <S.ResultWrapped>
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
                {data.map((item) => (
                  <li key={item.month}>
                    <div
                      style={{
                        backgroundColor: item.color ? item.color : "#e8dcff",
                        height: item.height,
                      }}
                    />
                    <p>{item.month}</p>
                  </li>
                ))}
              </ul>
            </S.ColumnWrapped>
          </S.ResultWrapped>
        </div>

        <div>
          <S.WrappedHistoric>
            <h1>Histórico de Transações</h1>
            <ul>
              <li>
                Ontem
                <ul>
                  <li>R$ -540,52</li>
                </ul>
              </li>
              <li>
                Quinta-Feira
                <ul>
                  <li>R$ -273,90</li>
                </ul>
              </li>
              <li>
                Segunda-Feira
                <ul>
                  <li>R$ -1.456,20</li>
                </ul>
              </li>
            </ul>
          </S.WrappedHistoric>
        </div>
      </S.Graphic>
      <Finance />
      <Historic />
    </>
  );
}
