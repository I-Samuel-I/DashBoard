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
                <h2>
                  Tema
                  <p>
                    Escolha entre tema escuro (ideal para pouca luz) ou tema
                    claro (aparência brilhante). Personalize conforme sua
                    preferência.
                  </p>
                </h2>
                <DarkMode />
              </li>
              <li>
                <h2>
                  Idioma
                  <p>
                    Altere o idioma da plataforma para o de sua preferência,
                    facilitando a navegação e compreensão do conteúdo.
                  </p>
                </h2>
                <Language />
              </li>
            </ul>
          </div>
          <div>
            <h1> Privacidade </h1>
            <ul>
              <li>
                <h2>
                  Corrigir dados pessoais
                  <p>
                    Ajuste ou atualize suas informações pessoais para mantê-las
                    precisas e atualizadas.
                  </p>
                </h2>
                <button>Retificar</button>
              </li>
              <li>
                <h2>
                  Atualizar documentos
                  <p>
                    Adicione ou substitua documentos necessários para manter sua
                    conta em conformidade.
                  </p>
                </h2>
                <button>Atualizar</button>
              </li>
              <li>
                <h2>
                  Excluir conta
                  <p>
                    Remova permanentemente sua conta e todos os dados associados
                    a ela.
                  </p>
                </h2>
                <S.DeleteBtn>Excluir</S.DeleteBtn>
              </li>
              <li>
                <h2>
                  Portal de privacidade
                  <p>
                    Acesse ferramentas e configurações para gerenciar sua
                    privacidade e dados pessoais.
                  </p>
                </h2>
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
