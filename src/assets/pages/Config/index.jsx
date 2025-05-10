import * as S from "./style";
import DarkMode from "../../components/configPage/DarkMode";
import NavbarDisplayOff from "../../components/nav/NavbarDisplayOff";
import ReturnPage from "../../routes/Return/returnPage";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Config() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <>
      <S.Config>
        <S.Options>
          <div>
            <h1>
              {t(
                "configPage.preferenceSection.preferenceTitle",
                "Preferências"
              )}
            </h1>
            <ul>
              <li>
                <span>
                  <h2>
                    {t("configPage.preferenceSection.preferenceTheme", "Tema")}
                  </h2>
                  <p>
                    {t(
                      "configPage.preferenceSection.preferenceThemeText",
                      "Escolha entre tema escuro ou tema claro."
                    )}
                  </p>
                </span>
                <DarkMode />
              </li>
              <li>
                <span>
                  <h2>
                    {t(
                      "configPage.preferenceSection.preferenceLanguage",
                      "Idioma"
                    )}
                  </h2>
                  <p>
                    {t(
                      "configPage.preferenceSection.preferenceLanguageText",
                      "Altere o idioma da plataforma para o de sua preferência, facilitando a navegação e compreensão do conteúdo."
                    )}
                  </p>
                </span>
                <button onClick={handleChangeLanguage}>
                  {currentLanguage === "en" ? "English" : "Português (Brasil)"}
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h1>
              {t("configPage.privacySection.privacyTitle", "Privacidade")}
            </h1>
            <ul>
              <li>
                <span>
                  <h2>
                    {t(
                      "configPage.privacySection.privacyData",
                      "Corrigir dados pessoais"
                    )}
                  </h2>
                  <p>
                    {t(
                      "configPage.privacySection.privacyDataText",
                      "Ajuste ou atualize suas informações pessoais para mantê-las precisas e atualizadas."
                    )}
                  </p>
                </span>
                <button>
                  {t("configPage.privacySection.privacyDataBtn", "Retificar")}
                </button>
              </li>
              <li>
                <span>
                  <h2>
                    {t(
                      "configPage.privacySection.privacyUpdate",
                      "Atualizar documentos"
                    )}
                  </h2>
                  <p>
                    {t(
                      "configPage.privacySection.privacyUpdateText",
                      "Adicione ou substitua documentos necessários para manter sua conta em conformidade."
                    )}
                  </p>
                </span>
                <button>
                  {t("configPage.privacySection.privacyUpdateBtn", "Atualizar")}
                </button>
              </li>
              <li>
                <span>
                  <h2>
                    {t(
                      "configPage.privacySection.privacyDelete",
                      "Excluir conta"
                    )}
                  </h2>
                  <p>
                    {t(
                      "configPage.privacySection.privacyDeleteText",
                      "Remova permanentemente sua conta e todos os dados associados a ela."
                    )}
                  </p>
                </span>
                <S.DeleteBtn>
                  {t("configPage.privacySection.privacyDeleteBtn", "Excluir")}
                </S.DeleteBtn>
              </li>
              <li>
                <span>
                  <h2>
                    {t(
                      "configPage.privacySection.privacyPortal",
                      "Portal de privacidade"
                    )}
                  </h2>
                  <p>
                    {t(
                      "configPage.privacySection.privacyPortalText",
                      "Acesse ferramentas e configurações para gerenciar sua privacidade e dados pessoais."
                    )}
                  </p>
                </span>
                <button>
                  {t("configPage.privacySection.privacyPortalBtn", "Inserir")}
                </button>
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
