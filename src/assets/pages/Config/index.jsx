import { use, useState } from "react";
import Navbar from "../../components/navbar";
import * as S from "./style";
import DarkMode from "../../components/DarkMode";
import Language from "../../components/Language";
export default function Config() {
  return (
    <>
      <S.Config>
        <S.Options>
          <div>
            <h1> Preferências </h1>
            <ul>
              <li>
                <h3>
                  Tema
                  <p>
                    Escolha entre tema escuro (ideal para pouca luz) ou tema
                    claro (aparência brilhante). Personalize conforme sua
                    preferência.
                  </p>
                </h3>
                <DarkMode />
              </li>
              <li>
                <h3>
                  Idioma
                  <p>
                    Altere o idioma da plataforma para o de sua preferência,
                    facilitando a navegação e compreensão do conteúdo.
                  </p>
                </h3>
                <Language />
              </li>
            </ul>
          </div>
          <div>
            <h1> Privacidade </h1>
            <ul>
              <li>
                <h3>
                  Corrigir dados pessoais
                  <p>
                    Ajuste ou atualize suas informações pessoais para mantê-las
                    precisas e atualizadas.
                  </p>
                </h3>
                <button>Retificar</button>
              </li>
              <li>
                <h3>
                  Atualizar documentos
                  <p>
                    Adicione ou substitua documentos necessários para manter sua
                    conta em conformidade.
                  </p>
                </h3>
                <button>Atualizar</button>
              </li>
              <li>
                <h3>
                  Excluir conta
                  <p>
                    Remova permanentemente sua conta e todos os dados associados
                    a ela.
                  </p>
                </h3>
                  <S.DeleteBtn>Excluir</S.DeleteBtn>  
              </li>
              <li>
                <h3>
                  Portal de privacidade
                  <p>
                    Acesse ferramentas e configurações para gerenciar sua
                    privacidade e dados pessoais.
                  </p>
                </h3>
                <button>Inserir</button>
              </li>
            </ul>
          </div>
        </S.Options>
        <Navbar />
      </S.Config>
    </>
  );
}
