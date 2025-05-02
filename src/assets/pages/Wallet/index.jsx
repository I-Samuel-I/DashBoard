import Balance from "../../components/walletPage/Balance";
import Investments from "../../components/walletPage/Investments";
import NavbarDisplayOff from "../../components/nav/NavbarDisplayOff";
import ReturnPage from "../../routes/Return/returnPage";
import * as S from "./style";
export default function Wallet() {
  return (
    <>
      <S.WalletMain>
        <S.WalletInfo>
          <Balance />
          <Investments />
        </S.WalletInfo>
        <NavbarDisplayOff/>
        <ReturnPage/>
      </S.WalletMain>
    </>
  );
}
