import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
export default function ReturnPage() {
  const Navigate = useNavigate();
  return (
    <S.ReturnPage>
      <button onClick={() => Navigate(-1)}>
      <FontAwesomeIcon icon={faArrowLeft} style={{ paddingRight: '10px' }} />       
       Voltar Página
      </button>
    </S.ReturnPage>
  );
}
