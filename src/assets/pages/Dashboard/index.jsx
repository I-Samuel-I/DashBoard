import Navbar from "../../components/navbar";
import * as S from "./style";
export default function Dashboard(){

    return(
        <>
        <S.ContentWrapped>
            <S.DashBoard>
                <header>
                <h1>Olá, seja bem-vindo(a)! </h1>
                <h3>Esse é o seu DashBoard pessoal.</h3>
                <p>Informações abaixo.</p>
                </header>
            </S.DashBoard>
        <S.NavWrapped>
            <Navbar/>
        </S.NavWrapped>
        </S.ContentWrapped>
        </>
    )
}