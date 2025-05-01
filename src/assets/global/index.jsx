import AppRoutes from "../routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="fade-up">  
      <AppRoutes />
    </div>
  );
}
