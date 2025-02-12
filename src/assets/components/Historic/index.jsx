import * as S from "./style";
export default function Historic() {
  return (
    <>
      <S.BuyerHistory>
        <h1>Histórico de Compradores</h1>
        <S.WrappedTabble>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data</th>
              <th>Nome</th>
              <th>Localização</th>
              <th>Valor</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#12345</td>
              <td>02/08/2023</td>
              <td>Roberto Santos</td>
              <td>Rio Grande do Sul</td>
              <td>R$ 15,00</td>
              <td>
                <S.StatusCircle color="#0bb07b" /> Aprovado
              </td>
            </tr>
            <tr>
              <td>#67890</td>
              <td>03/08/2023</td>
              <td>Beatriz Rodrigues</td>
              <td>Salvador</td>
              <td>R$ 15,00</td>
              <td>
                <S.StatusCircle color="orange" /> Em Análise
              </td>
            </tr>
          </tbody>
        </S.WrappedTabble>
      </S.BuyerHistory>
    </>
  );
}
