import styled from "styled-components";

export const ContentWrapped = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const NavWrapped = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;
export const DashBoard = styled.header`
  flex: 1;
  background-color: #73737311;
  border: solid 1px;
  header {
    margin-left: 5%;
    display: flex;
    flex-direction: row;
    
  }
  figure {
    display: flex;
    margin-left: auto;
    position: relative;
    top: 25px;
    right: 250px;
    img {
        position: relative; 
        
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ffff;
    }
    p{
        display: flex;
        height: 50px;
        align-items: center;
        margin-left: 10px;
        font-weight: 500;
    }
  }
`;

export const WrappedTittle = styled.div`
    display: flex;
    flex-direction: column;
`;
