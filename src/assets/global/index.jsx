import AppRoutes from "../routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Main() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down">
      <AppRoutes />
    </div>
  );
}
