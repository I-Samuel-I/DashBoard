import ReturnPage from "../../routes/returnPage";
import * as S from "./style";
export default function Support() {
  return (
    <>
      <S.Support>
        <h1>SUPPORT OFFLINE</h1>
        <S.ReturnWrapped>
          <ReturnPage/>
        </S.ReturnWrapped>
      </S.Support>
    </>
  );
}
