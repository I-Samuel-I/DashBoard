import { useNavigate } from "react-router-dom";
export default function ReturnPage() {
    const Navigate = useNavigate();
    return (
    <>
    <button onClick={() => Navigate(-1)}>Voltar</button>
    
    </>
    );
}
