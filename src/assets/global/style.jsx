import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    
}
body,html {
    width: 100%;
    height: auto; 
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    color: #262626;  
    background-color: #73737305;
}   
`;