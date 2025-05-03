import * as S from "./style";

import DarkMode from "../../components/configPage/DarkMode";
import Language from "../../components/Language";
import NavbarDisplayOff from "../../components/nav/NavbarDisplayOff";
import ReturnPage from "../../routes/Return/returnPage";

export default function Config() {
  return (
    <>
      <S.Config>
        <S.Options>
          <div>
            <h1> Preferências </h1>
            <ul>
              <li>
                <span>
                  <h2>Tema</h2>
                  <p>Escolha entre tema escuro ou tema claro.</p>
                </span>
                <DarkMode />
              </li>
              <li>
                <span>
                  <h2>Idioma </h2>
                  <p>
                    Altere o idioma da plataforma para o de sua preferência,
                    facilitando a navegação e compreensão do conteúdo.
                  </p>
                </span>
                <Language />
              </li>
            </ul>
          </div>
          <div>
            <h1> Privacidade </h1>
            <ul>
              <li>
                <span>
                  <h2>Corrigir dados pessoais</h2>
                  <p>
                    Ajuste ou atualize suas informações pessoais para mantê-las
                    precisas e atualizadas.
                  </p>
                </span>
                <button>Retificar</button>
              </li>
              <li>
                <span>
                  <h2>Atualizar documentos</h2>
                  <p>
                    Adicione ou substitua documentos necessários para manter sua
                    conta em conformidade.
                  </p>
                </span>
                <button>Atualizar</button>
              </li>
              <li>
                <span>
                  <h2>Excluir conta</h2>
                  <p>
                    Remova permanentemente sua conta e todos os dados associados
                    a ela.
                  </p>
                </span>
                <S.DeleteBtn>Excluir</S.DeleteBtn>
              </li>
              <li>
                <span>
                  <h2>Portal de privacidade</h2>
                  <p>
                    Acesse ferramentas e configurações para gerenciar sua
                    privacidade e dados pessoais.
                  </p>
                </span>

                <button>Inserir</button>
              </li>
            </ul>
          </div>
        </S.Options>
        <NavbarDisplayOff />
        <ReturnPage />
      </S.Config>
    </>
  );
}
