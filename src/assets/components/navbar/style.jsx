import styled from "styled-components";

export const NavBar = styled.div ` 
    background-color: white;
    height: 100vh;
    border-radius: 10px;
     
    h1{
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: 20px;
        font-size: 2.5em;
        color: #9E6EFE;
    }
    
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        width: 15%;
        list-style: none;
        
    }
    button{
        width: 80%;
        background: none;
        border: none;
        font: inherit;
        color: inherit;
        cursor: pointer;
        outline: none;
        appearance: none;
    }
    li{ 
        display: flex;
        
        align-items: center;
        width: 80%;
        height: 5vh;
        font-size: 1.2em;
        font-weight: 550;
        
        &:hover{
            color: #9E6EFE;
            background-color: #73737311;
            border-radius: 5px;
        }   
    }
`;

export const OptionsWrapped = styled.div `
    margin-top: 15px;
    ul{
        gap: 0px;
        border-top: 2px solid #73737318;
        
    }
    li{
        
        margin-top: 15px;
    }
    li:last-child {
        
        &:hover{
            color: #f03d3d;
            
        }
    }
`