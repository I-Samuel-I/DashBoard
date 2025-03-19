import { useState,useEffect } from "react";
import Navbar from "../navbar";

export default function NavbarDisplayOff() {
  const [showNavbar, setShowNavbar] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShowNavbar(window.innerWidth > 991);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return <>{showNavbar && <Navbar />}</>;
}
