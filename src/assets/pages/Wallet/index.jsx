import Balance from "../../components/Balance";
import Investments from "../../components/Investments";
import MenuHamburguer from "../../components/MenuHamburguer";
import Navbar from "../../components/Navbar";
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
        <Navbar />
        <MenuHamburguer />
        <ReturnPage/>
      </S.Wallet>
    </>
  );
}
