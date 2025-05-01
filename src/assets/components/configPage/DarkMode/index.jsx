import * as S from "./style";
import { useState } from "react";

export default function DarkMode() {
  const [DarkMode, setDarkMode] = useState(false);

  const toogleDark = () => {
    setDarkMode(!DarkMode);
  };
  return (
    <S.DarkMode>
      <input
        type="checkbox"
        id="toggle"
        checked={DarkMode}
        onChange={toogleDark}
      />
      <S.Slider htmlFor="toogle" />
    </S.DarkMode>
  );
}
