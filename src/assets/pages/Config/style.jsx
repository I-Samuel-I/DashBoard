import styled from "styled-components";

export const Config = styled.section`
  display: flex;
  flex-direction: row-reverse;
  background-color: #73737309;
  height: 100vh;
  
`;
export const Options = styled.div`
  width: 80%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  
 
@media (600px < width <= 767px) {
  section{
    
  }
  
  width: 100%;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 5%;
}
 
@media (767px < width <= 991px) {
  width: 100%;
}
  
  div {
    box-shadow: 10px 1px 15px #73737316;
    padding: 20px;
    margin-bottom: 2%;
    background-color: white;
    border-radius: 15px;
  }
  button {
    border: none;
    border-radius: 10px;
    width: 15%;
    font-weight: 550;
    font-size: 0.9em;
    height: 50px;

    /* Dispositivos Largos (laptops/desktops, 992px para cima) */
@media (991px < width <= 1199px) {
  width: 50%;
  height: 50px;
}
/* Dispositivos Médios (Tablets deitados, 768px para cima) */
@media (767px < width <= 991px) {
  width: 100%;
}
@media (  width <= 767px) {
  width: 60%;
}
    
  }
  button:hover {
    cursor: pointer;
    color: #9e6efe;
    background-color: #73737325;
  }

  h1 {
    padding-bottom: 2%;
  }
  h3{
    color: #262626;
  }
  ul {
    list-style: none;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
  }
  p {
    padding-right: 200px;
    padding-top: 10px;
    font-weight: normal;
    font-size: 0.9em;
    color:#737373;
  }
`;
export const DeleteBtn = styled.button `
        &&:hover{
            color: red; 
        }
`