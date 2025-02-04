import { useNavigate } from "react-router-dom";
import * as S from "./style"
export default function Home(){
    const Navigate = useNavigate();
    
    const Join = () => {
        Navigate("/dashboard");
    }

    return (
        <>
        <S.Home>
            <section>
                    <h1>Bem-Vindo(a) ao meu DashBoard pessoal</h1>
                    <S.AntButton onClick={Join}> Entrar 
                        
                    </S.AntButton>
            </section>
        </S.Home>
        </>
    )
}