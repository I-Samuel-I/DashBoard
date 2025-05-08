import AppRoutes from "../routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "../languages/i18n.js";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000 });

    // aplica o idioma salvo, se houver
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);
  return (
    <div data-aos="fade-up">  
      <AppRoutes />
    </div>
  );
}
