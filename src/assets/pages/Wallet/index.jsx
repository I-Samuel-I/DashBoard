import Balance from "../../components/Balance";
import Investments from "../../components/Investments";
import NavbarDisplayOff from "../../components/NavbarDisplayOff";
import ReturnPage from "../../routes/returnPage";
import * as S from "./style";
export default function Wallet() {
  return (
    <>
      <S.Wallet>
        <S.WalletWrapped>
          <Balance />
          <Investments />
        </S.WalletWrapped>
        <NavbarDisplayOff/>
        <ReturnPage/>
      </S.Wallet>
    </>
  );
}
