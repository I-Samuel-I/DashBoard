import * as S from "./style";
export default function Graphic() {

    return (
        <>
       <S.Graphic>
        <section>
            <div>
                <h1>Gráfico de Receitas</h1>
            </div>
            <div>
                <h1>Histórico de Transações</h1>
            </div>
        </section> 
        </S.Graphic>
        <S.WrappedFinance>
            <section>
                <div>
                    <h1>Total de Vendas</h1>
                </div>
                <div>
                    <h1>Total bruto</h1>
                </div>
                <div>
                    <h1>Total líquido</h1>
                </div>
                <div>
                    <h1>Clientes</h1>
                </div>
            </section>
        </S.WrappedFinance> 
        <S.Forms>
            <form>
                <h1>Simulação de venda</h1>
                <input type="text" placeholder="Digite o nome"/>
                <input type="text" placeholder="Digite a localização"/>
                <input type="text" placeholder="Digite o valor da venda"/>
            
            <div>
                <h1>Histórico de Compradores</h1>
                
            </div>
            </form>
        </S.Forms>
            
        </>
    );
}