import styled from "styled-components";

export const ReturnPage = styled.div`
  position: absolute;
  right: 0;
  padding: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    color: #9E6EFE;
    background-color: #73737318;
    
    &:hover{
        cursor: pointer; 
        color: #9E6EFE;
        background-color: #73737330;
    }
  }
  @media (width < 992px) {
    
    padding: 30px;
  }
  @media (width < 600px) {
    padding: 15px;
  }
`;
