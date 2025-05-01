import * as S from './style.jsx';
export default function Investments() {
    return (
      <>
        <S.Investments>
          <h1>Meus Ativos</h1>
          <table>
            <thead>
              <tr>
                <th>Conta</th>
                <th>Valores</th>
                <th>Proporção</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spot</td>
                <td>R$ 0,76</td>
                <td>50,93%</td>
                <td>a</td>
              </tr>
              <tr>
                <td>Fundos</td>
                <td>R$ 12,30</td>
                <td>49,07%</td>
                <td>a</td>
              </tr>
              <tr>
                <td>Margem Cruzada</td>
                <td>R$ 123,21</td>
                <td>23,43%</td>
                <td>a</td>
              </tr>
              <tr>
                <td>Margem Isolada</td>
                <td>R$ 31,55</td>
                <td>78,61%</td>
                <td>a</td>
              </tr>
            </tbody>
          </table>
        </S.Investments>
      </>
    );
  }
  