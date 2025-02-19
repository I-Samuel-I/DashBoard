import { useState } from "react";

export default function Language() {
  const [language, setLanguage] = useState("pt");

  const toogleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };
  return (
    <>
      <button onClick={toogleLanguage}>
        {language === "pt" ? "Português (Brasil)" : "English"}
      </button>
    </>
  );
}
