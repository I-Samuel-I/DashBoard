import styled from "styled-components";

export const ContentWrapped = styled.main`
  display: flex;
  flex-direction: row-reverse;
  @media (width <= 750px) {
    flex-direction: column;
  }
`;
export const DashBoard = styled.header`
  flex: 1;
  
  
  header {
    margin-left: 5%;
    margin-top: 5%;
    display: flex;
    flex-direction: row;
  }
  figure {
    display: flex;
    margin-left: auto;
    position: relative;
    right: 10%;
    
    img {
      position: relative;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: #ffff;
    }
    p {
      display: flex;
      height: 50px;
      align-items: center;
      margin-left: 10px;
      font-weight: 500;
    }
    @media (width <= 992px) {
    
      right: 6%;
      top: -10px;
    p{
      display: none;
    }
    }
  }
`;
export const WrappedTittle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3%;
  @media (  width <= 499px) {
    margin-top: 20%;
  }
  @media ( 500px <= width <= 749px) {
    margin-top: 15%;
  }
  @media ( 750px <= width <= 992px) {
    margin-top: 8%;
  }
  h3 {
    color: #737373;
    font-weight: 500;
  }
`;
