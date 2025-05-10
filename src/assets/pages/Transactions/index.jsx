
import ReturnPage from "../../routes/Return/returnPage";
import * as S from "./style";
export default function Transactions() {
  return (
    <>
      <S.Transactions>
        <h1>OFFLINE</h1>
        <S.ReturnWrapped>
          <ReturnPage/>
        </S.ReturnWrapped>
      </S.Transactions>
    </>
  );
}
